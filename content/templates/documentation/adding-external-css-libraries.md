<img src="http://placehold.it/400x400" />
<h2>Adding external CSS libraries</h2>

<p>In the <code>content</code> area you will find two folders: <code>postcss</code> and <code>sccs</code>. The one you will use depends on your preference in your <a href="http://bedrockapp.org/documentation/configuration/">configuration</a>. It should be safe to delete the folder you don’t need.</p>



<h3>SCSS example</h3>



<p>If you want to integrate an SCSS library like Bootstrap, you can install it using npm:</p>



<pre class="wp-block-code"><code>npm i bootstrap --save-prod</code></pre>



<p>Note the <code>--save-prod</code> to add the dependency to <code>dependencies</code> (and not <code>devDependencies</code>.</p>



<p>Then, in your SCSS file:</p>



<pre class="wp-block-code"><code>@import "../../node_modules/bootstrap/scss/bootstrap";</code></pre>



<p>You should now see the Bootstrap CSS affecting your Bedrock install.</p>



<h3>PostCSS example</h3>



<p>See this blogpost on adding <a href="https://bedrockapp.org/2021/06/17/how-to-add-tailwind-to-bedrock/">Tailwind</a>.</p>
