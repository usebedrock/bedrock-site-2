<h2>Working with the style guide</h2>
<h3>Documenting a component</h3>
<p>To document a component within Bedrock, create a folder with the component category<code>/content/templates/_components</code> folder.</p>
<p>Then, create a and a .pug file with the component name in said folder. Put your template code in there and the component will show up in the style guide within Bedrock.</p>
<h3>Humanized component names</h3>
<p>We automatically try to prettify the component name based on the folder structure. You can categorize components with a prefix, for example <code>c-my-component</code>.</p>
<p>Within Bedrock’s&nbsp;<a href="https://bedrockapp.org/documentation/configuration/">configuration</a> you can then define the meaning of a custom prefix:</p>
<pre><code>componentCategories: {
  oc: 'Official components',
  cc: 'Custom components'
}</code></pre>
<p>This prefix defines how the category shows up in your style guide.</p>
<h3>Component descriptions</h3>
<p>To make the documentation prettier, you can use a markdown (.md) file with the same filename as the .pug file in the folder.</p>
<p>Use YAML front matter to give the component a title and content.</p>
<p>Here is a template:</p>
<pre><code>---
title: My component
---

[Description of my component in markdown]</code></pre>
<h3>Documenting typography</h3>
<p>To document typography, create a new component and use a template like <a href="https://gist.github.com/Wolfr/f1d1ab63b25ecf27754911d36a9733f2">this</a>.</p>
<p>This example is the one from Material design – you can adapt it to your needs by changing the types of headings that get included.</p>
<p>Note that some of the classes in there are hooks for automatically documenting the font size of components in pixels using Javascript.</p>
<h3>Documenting icons (SVG)</h3>
<p>You can put SVG files in the <code>content/icons</code> directory to document them.</p>
<p>We also support 1 level of folders here, e.g.&nbsp;<code>content/icons/16</code>&nbsp;and&nbsp;<code>content/icons/128</code>&nbsp;. For example when you have small icons and large “illustrative” icons.</p>
<p>Within your pug file, use a loop like this to loop over all your icons in their respective folders:</p>
<pre><code>.c-styleguide-svg-icons
    each category, id in icons.svg
        if id
            h4 #{id}
        else
            h4 base folder
            each icon in category
                +icon(icon.category+'/'+icon.name)
                | #{icon.name}</code></pre>
<h3>Documenting icons from a Bedrock generated icon font</h3>
<p>Bedrock supports generating an icon font. You can generate an icon font by placing icons in the <code>content/icon-font-source</code> directory.</p>
<p>Make sure icon fonts are enabled. See <a href="https://bedrockapp.org/documentation/configuration/">configuration</a>.</p>
<p>You use a loop like this in the documentation to document the icons:</p>
<pre><code>ul.br-icon-font-list
    each icon in icons.iconFont
        li
            .if(class="if-"+icon)
            | #{icon}</code></pre>
<p>To style the component documentation, we recommend writing a little bit of custom code scoped to the styleguide. You will find example code in our Bedrock bases e.g. the Material design base.</p>
<h3>Documenting colors from JSON (recommended)</h3>
<p>We used to document colors directly from an SCSS variables file, but are stepping away from this technique.</p>
<p>The new recommendation is to use a data file to document colors. Add a data file, for example <code>colors.js</code> to the <code>content/data</code> folder. Here is some sample content you can use in a <a href="https://gist.github.com/Wolfr/12958fafe4c32d2ad868f278333f345c">gist</a>.</p>
<p>Now render it out as you would normally <a href="http://bedrockapp.org/documentation/working-with-data/">render data</a>.</p>
<pre><code>each color in contentData.colors
    div(style="background: #"+color.code+"; height: 40px; width: 40px;")
        | #{color.name}
        br
        | ##{color.code}</code></pre>
<h3>Documenting colors directly from SCSS variables</h3>
<p>Use code like this <a href="https://gist.github.com/Wolfr/6a8db6a7ca69fc6488b39435fc8af678">gist</a>&nbsp;to loop over colors.</p>
<p>We are supposing you have defined a reference to a colors.scss file in your <a href="https://bedrockapp.org/documentation/configuration/">config</a>, that follows a very specific syntax, see this <a href="https://gist.github.com/Wolfr/aaec615790a3521c9a3f4d2e6e6f7d0f">template</a> for an example.</p>
<p>Since we depend on regular expressions to parse the colors, you should use exactly this syntax. Don’t use SCSS variables in this file – only HEX values.</p>
