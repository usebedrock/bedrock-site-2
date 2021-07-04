
<h2>Adding Javascript</h2>
<p>How do you add Javascript libraries from npm to your project? As an example, we will add Popper.js. Run the following in your terminal in the root of the project:</p>
<pre><code>npm install @popperjs/core --save</code></pre>
<p>Popper will be added to your node dependencies in <code>package.json</code>. In index.js (<code>content/js/index.js</code>), paste the following code</p>
<pre><span class="token keyword module">import</span> <span class="token punctuation">{</span><span class="token plain"> createPopper </span><span class="token punctuation">}</span> <span class="token keyword module">from</span> <span class="token string">'@popperjs/core';
</span>console.log(<span class="token plain">createPopper);</span></pre>
<p>If you see Popper’s output in your console, things worked. For further instructions, I refer you to the excellent <a href="https://popper.js.org/">Popper</a> documentation. Of course this is just an example. You can import any npm module.</p>
<h3>No transpile</h3>
<p>Note that any files contained in the root <em>except</em> <code>index.js</code> get transported to your build without any transpiling. This way you can, for example, add a vanilla JS file called <code>map.js</code> and load it as is, if for example you wrote a simple vanilla JS script intended to work in every browser.</p>
<h3>Transpile using Babel</h3>
<p>You can import files into the <code>index.js</code> file as follows – for example, a file called calculator.js in the a folder called modules:</p>
<pre><span class="token string">import './modules/calculator';</span></pre>
<p>The whole <code>index.js</code> will be bundled as <code>bundle-client.js</code> in the final build. A typical <code>index.js</code> contains a few modules to make a website work:</p>
<pre><span class="token keyword module">import</span> <span class="token string">'./slideshow';
<span class="token keyword module">import</span> './form-validation';</span></pre>
<p>You will also see a file called <code>bundle-protoype.js</code>, this is explained in&nbsp;<a href="http://bedrockapp.org/from-prototype-to-production/">from prototype to production</a>.</p>
