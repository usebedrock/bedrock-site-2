
<h2>Working with data</h2>
<p>It can be very handy to reference data from a Javascript array or even a JSON style object to add data to your prototype.</p>
<p>Since we are working with the <a href="https://pugjs.org/api/getting-started.html">pug</a> templating, which is Javascript-aware, you can easily work with data in your templates.</p>
<p>For example, add this to a template:</p>
<pre><code>-
    let names = [
        {
            "firstName": "Tomasa",
            "lastName": "Lesch"
        },
        {
            "firstName": "Frank",
            "lastName": "Underwood"
        }
    ];
</code></pre>
<p>Now, you can reference the data in your template:</p>
<pre><code>-
    each name in names
        p #{firstName} #{lastName}
</code></pre>
<h2>Using the data folder</h2>
<p>To structure your project’s data with some more organization, you can use the <code>data</code> folder.</p>
<p>Any .js or .json file in the data folder can be used as a source to reference data from.</p>
<p>In the default install of Bedrock, you can find some examples of data being loaded.</p>
<p>You could look at these examples and dive in, or read on for more explanations.</p>
<h3>Creating lists with data – example</h3>
<p><em>Filename: data/example-array.js</em></p>
<p>The filename determines how to call the data, e.g. a file called <code>apples.js</code> will be available on <code>contentData.apples</code>. If you have something like <code>news-items.js</code> which contains a dash, we will convert it to camelCase and it will be available via <code>contentData.newsItems</code>.</p>
<pre><code>'use strict';

let exampleArray = [
    {
        "id": 0,
        "firstName": "Tomasa",
        "lastName": "Lesch"
    },
    {
        "id": 1,
        "firstName": "Frank",
        "lastName": "Underwood"
    }
];

module.exports = exampleArray;
</code></pre>
<p>Note the usage of `use strict` and module.exports; this is necessary to expose data to your templates.</p>
<p>Now, in your template:</p>
<pre><code>
ul
    each person in contentData.exampleArray
        li
            span= person.id
            span Hello, my name is #{person.firstName} #{person.lastName}!

</code></pre>
<p>Note the usage of `contentData` in the `each` part of the pug code. An object or array local to a template does not need this.</p>
<h2>Other data examples</h2>
<h3>Working with data – faker.js example</h3>
<p>This example shows to how to use a combination of the <a href="https://momentjs.com/">moment.js</a> and <a href="https://github.com/marak/Faker.js/">faker.js</a> libraries to generate random data.</p>
<p>Data code:</p>
<pre><code>'use strict';

const moment = require('moment');
const faker = require('faker');

/*
  Helper functions
*/

function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*
  Data
*/

const TITLES = [
  'My title 1',
  'My title 2'
];

const LOCATIONS = [
  'Location 1',
  'Location 2'
];

// Generate random articles
let news = new Array(10).fill('').map(() =&gt; ({
    date: moment(faker.date.past(1)).format('DD MMM YYYY'),
    title: getRandomFromArray(TITLES) + " | " + getRandomFromArray(LOCATIONS),
    author: faker.name.firstName() + " " + faker.name.lastName(),
    longDescription: capitalizeFirstLetter(faker.lorem.words(50))
}));

module.exports = news;</code></pre>
<p>Template code:</p>
<pre><code>each article, index in contentData.news
    p #{article.date}
    h3
        a(href="#") #{article.title}
            p #{article.longDescription}
</code></pre>
<h3>Working with objects – example</h3>
<p><em>Filename: data/example-object.js</em></p>
<p>Data code:</p>
<pre><code>'use strict';

let exampleObject = {
    fruits: ['banana', 'apple'],
    veggies: ['lettuce', 'tomato']
};

module.exports = exampleObject;
</code></pre>
<p>Template code:</p>
<pre><code>
each type, typeName in contentData.exampleObject
    ul
        li= typeName
        ul
            each product in type
                li= product
</code></pre>
