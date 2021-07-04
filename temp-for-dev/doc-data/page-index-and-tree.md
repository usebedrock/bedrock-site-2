<h2>Page index and tree</h2>
<h3>What is the page tree? And index?</h3>
<p>Bedrock is a static site generator that can generate a whole website. But it is mainly used for prototypes. In prototypes it is useful to see the pages contained in the prototype.</p>
<p>This is done by looking at the <strong>page tree</strong>. By default, the index file of a prototype also contains a listing of the pages which we call the <strong>page index</strong>.</p>
<p><img style="max-width: 80%; margin: 0 auto;" src="/images/tree.png" alt="Page tree"></p>
<p>You are free to replace this by your preferred homepage content.</p>
<p>The page tree shows a listing of the different pages in your prototype. The page tree can be shown and hidden at any time using the shortcut Ctrl + M (or Ctrl + B on Windows).</p>
<p>The page tree remember its state across pages. If you collapsed a folder, it will remember your choice as you navigate through the prototype.</p>
<h3>How to add a page</h3>
<p>To add a page, simply create a new <code>.pug</code> file in the <code>/content/templates</code> folder. Here is a basic page content setup you can use that will always work, regardless of folders/paths:</p>
<pre><code>extends /templates_layouts/master

block body
    // Your code here
</code></pre>
<p>Note that we are using the <a href="http://bedrockapp.org/documentation/working-with-pug/">Pug</a> templating language.</p>
<p>When you add the page, you will see it appearing in the page index, and in the page tree.</p>
<h3>Nested page structures</h3>
<p>You can nest <code>.pug</code> templates in folders. The structure will be reflected on the index page and in the page tree.</p>
<h3>Working with page states</h3>
<p>Imagine you have a page called&nbsp;<code>sign-in.pug</code>. When you add another template called&nbsp;<code>sign-in--error.pug</code> (note the double dash), it will show up as a&nbsp;<em>page state</em>. Page states show up at the bottom of the page tree.</p>
<p>This is useful for showing the different states a page can be in.</p>


<h3>Changing the page tree layout</h3>



<p>You can change the page tree layout using the configuration object. There is an option to use a sidebar, and an option to show the page tree as a fixed overlay (from Bedrock 1.36 on).</p>



<h3>Disabling the page tree</h3>



<p>You can disable the page tree using the config object. (from Bedrock 1.36 on)</p>



<h3>Setting a different index template</h3>



<p>By default, the first template you see when you go to a Bedrock prototype is a list of pages. Want to replace this behavior?</p>



<p>Simply replace the contents of <code>/content/templates/index.pug</code> with your own content.</p>
