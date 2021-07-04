<h2>Advanced usage</h2>
<h3>Custom styleguide styles</h3>
<p>Sometimes, wou want specific styles to make the styleguide look better.</p>
<p>It is recommended to put your custom styles for this purpose in <code>styleguide.scss</code>.</p>
<p>For example, in the “real world” (e.g. the app itself) some HTML elements are hidden by default, or positioned in specific ways. In the styleguide sometimes we want to undo some of that for demonstrational purposes.</p>
<p>A common thing to do is to make fixed positioned elements such as modals static for styleguide purposes. Sometimes element are also hidden by default, and you want to show the unhidden version in the prototype.</p>
<p>For example, here is code to make Bootstrap popovers visible in the styleguide:</p>
<pre><code>/* Make popovers visible
   ========================================================================== */

div[id^="component-"] {
  .popover {
    position: relative;
    display: block;
    margin: 30px;
  }
}</code></pre>
<p>Because this logic is project specific, we do not supply defaults with Bedrock. You are welcome to write your custom styles in this files. Don’t forget to remove it in production though!</p>
