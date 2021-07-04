<h2>Advanced pug tips</h2>
<h3>Block/template extension</h3>
<p>The <code>extends</code> feature in Pug is very powerful, but in large projects, you might want to limit how many levels of extension you put inside your templates. Do realize that this slows down the compiler and if you want to maintain a speedy project, you might want to avoid too much nesting.</p>
<h3>Referencing components directly in your pages to have a single source of truth</h3>
<p>It might be smart to sometimes directly reference the code from your components, instead of duplicating the code in your templates. This is a nice way to keep your code dry.</p>
<p>You can directly include components using code like this:</p>
<pre><code>include /_components/my-component/component-name</code></pre>
<p>You could even work with mixin options to include parameters. A convoluted example can be found in this <a href="https://gist.github.com/Wolfr/ab9cdcdc90884e9812674dc461df6b51">gist</a>. But ask yourself, shouldn’t you be writing the component in something like <a href="https://reactjs.org/">React.js</a> or <a href="https://vuejs.org/">Vue</a> at this point?</p>
<h3>About mixins</h3>
<p>Mixins are a nice language feature of pug, and they can be very handy.</p>
<p>However, within the context of Bedrock, ask yourself if it’s not better to use <a href="https://bedrockapp.org/documentation/working-with-data/">structured data</a> instead of hiding data inside of pug parameters and mixins.</p>
