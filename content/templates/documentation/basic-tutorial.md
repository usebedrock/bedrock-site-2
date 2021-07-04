<h2>Basic setup</h2>

<h3>The lowdown</h3>

<p>This tutorial lets you jump into Bedrock quickly.</p>

<p>We are going to assume you have some knowledge about modern web development, including working with Git, HTML and CSS.</p>

<p>One part that might be a bit more exotic about working with Bedrock is the usage of the <em>Pug</em> templating language.</p>

<p>If this is new to you, check out <a href="/documentation/working-with-pug">working with Pug</a>.</p>

<hr class="wp-block-separator">

<h3>Getting Bedrock</h3>

<p>The easiest way to set up Bedrock is:</p>

<pre class="wp-block-code"><code># Stable version
npx degit usebedrock/bedrock my-bedrock-project</code></pre>

<p>For pre-release versions, use:</p>

<pre class="wp-block-code"><code># Sort of stable
npx degit usebedrock/bedrock#develop my-bedrock-project
# Latest and greatest, but can be buggy
npx degit usebedrock/bedrock#canary my-bedrock-project</code></pre>

<p>Curious how this works? Check the <a href="https://bedrockapp.org/2021/06/22/how-the-single-command-install-of-bedrock-works/">blog post</a>.</p>

<p>Now navigate into the directory you just copied:</p>

<pre class="wp-block-code"><code>cd&nbsp;my-bedrock-project</code></pre>

<p>Next, install the project’s node modules:</p>

<pre class="wp-block-code"><code>npm install</code></pre>

<p>(We follow the Node LTS (Long term stable release. Take a look at <a href="/documentation/requirements">Bedrock’s requirements</a>). After installing the node modules, run the following:</p>

<pre class="wp-block-code"><code>npm start</code></pre>

<p>This starts a development server and opens your default browser at <code>http://localhost:3000.</code></p>

<p>Please keep this server running while working on a Bedrock project.</p>

<figure class="wp-block-image"><img src="https://bedrock.mono.company/wp-content/uploads/2018/01/tutorial-step-terminal.png" alt="" class="wp-image-209" srcset="https://bedrockapp.org/wp-content/uploads/2018/01/tutorial-step-terminal.png 1524w, https://bedrockapp.org/wp-content/uploads/2018/01/tutorial-step-terminal-300x228.png 300w, https://bedrockapp.org/wp-content/uploads/2018/01/tutorial-step-terminal-768x584.png 768w, https://bedrockapp.org/wp-content/uploads/2018/01/tutorial-step-terminal-1024x778.png 1024w, https://bedrockapp.org/wp-content/uploads/2018/01/tutorial-step-terminal-500x380.png 500w, https://bedrockapp.org/wp-content/uploads/2018/01/tutorial-step-terminal-1280x973.png 1280w" sizes="(max-width: 1524px) 100vw, 1524px"></figure>

<p>Congratulations, you got Bedrock up and running!</p>

<h3>Next steps</h3>

<p>To use Bedrock, start making some templates! Some things to try:</p>

<ul><li>Make a new page by creating a new <code>.pug</code> file under&nbsp;<code>content/templates</code>. <a href="http://bedrockapp.org/documentation/page-index-and-tree/">Read more about pages</a>. </li><li>Start writing your CSS in&nbsp;<code>main.scss</code>. By default, there is some CSS powered by <a href="https://watercss.kognise.dev/">water.css</a>. The default logic uses SCSS. You can customize Bedrock to use PostCSS. See <a href="https://bedrockapp.org/documentation/configuration/">configuration</a>. These are just some defau;t styles. You should completely remove this and replace it with your own!</li><li>Document an HTM/CSS component using the structure in&nbsp;<code>templates/_components</code>. Documenting a component is as simple as making a pug file in a folder. <a href="http://bedrockapp.org/documentation/working-with-the-styleguide/">Read more about working with the styleguide</a>.</li></ul></div>