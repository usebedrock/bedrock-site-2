
<h2>From prototype to production</h2>

<p>Bedrock is intended as a prototyping tool. The choices made were made so that we can quickly build interfaces and large prototypes. We specifically use the <a href="https://pugjs.org/api/getting-started.html">best templating language out there</a> and we provide systems to build component styleguides in a fast manner.</p>



<p>However, Bedrock can also be used to build a final website or web app. Through a configuration file you can set up specific flags for production to compress CSS and JS. You can choose to enable or disable the prototype-specific features depending on your use cases  (page tree and styleguide)</p>



<p>When moving from prototype to production, there are a few things to note.</p>



<h3>The basic conversion logic</h3>



<p>Let’s say that you want to convert a Bedrock prototype to another development environment. The easiest way to do this is to:</p>



<ul><li>Copy paste the HTML output from the pages and translate to templating logic in the other codebase</li><li>Depending on <code>pageTree.layoutstyle</code> config<ul><li><code>sidebar</code>: The main template is wrapped in a <code>br-prototype-wrapper</code> which should be removed. This is to make the page tree work. Take the contents of <code>br-prototype-content</code> and make this your “root” div in the actual implementation.</li><li>Alternatively, change the settings to  <code>fixed</code> to get rid of the markup, or even set the entire <code>pageTree</code> object to false to not render it at all</li></ul></li><li>Sync the SCSS files, and re-build the SCSS pipeline in your dev environment (i.e. integrate into Rails asset pipeline, create a Webpack logic for React context etc.)</li><li>Copy JS and refactor for framework context where appropriate (for js details see <a href="https://bedrockapp.org/documentation/adding-javascript/">Adding Javascript</a>)</li></ul>



<h3>Styleguide and component conversion</h3>



<p>You could use the components in the styleguide as a base to work with projects like <a href="https://storybook.js.org/">StoryBook</a> or <a href="https://react-styleguidist.js.org/">Styleguidist</a>.</p>



<p>Bedrock components can be written as pure Pug (and thus render as pure HTML), but sometimes rely on Pug mixins to provide a way to encapsulate logic and attributes without tying the code to a specific JS framework or backend environment.</p>



<p>See this <a href="https://johanronsse.be/2021/03/06/pug-advanced-mixins/">blog post</a> for more details.</p>



<h3>Minification</h3>



<p>Bedrock provides some flags to minify CSS and JS, see <a href="https://bedrockapp.org/documentation/configuration/">configuration</a>.</p>



<h3>File and build details</h3>



<p>When you run Bedrock using <code>npm start</code> (i.e. in development mode) you will see that files get written to a folder called <code>tmp</code>. This is useful to inspect the output while developing. For example you can inspect how large your JS bundle is getting.</p>



<p>When you run <code>npm run build</code>, a full static site gets generated. In the <code>dist</code> folder you will find files you can deploy as a static website.</p>



<p>In the folder you will see a file called <code>bundle-protoype.js</code>. This is code needed to run the prototype, for example the Javascript for the page tree and for syntax highlighting of code blocks. </p>



<p>It is unnecessary to load this file when moving the prototype code to another dev environment (e.g. a JS view framework like Vue; a PHP environment, etc.). You can delete this file in this case.</p>



<p>We recommend deleting it as well as deleting <code>prototype.css</code>.</p>
