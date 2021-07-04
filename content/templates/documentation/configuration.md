
<h2>Configuration</h2>

<style>
.c-table-responsive {
overflow: scroll;
}
.c-table--mini td,
.c-table--mini th {
font-size: 1.2rem;
}
</style>

<p>Bedrock takes a default configuration which lives in <code>core/discovery/config.js</code>. You can modify the configuration with your own values in the <code>bedrock.config.js</code> file in the root folder.</p>

<div class="c-table-responsive">
<table class="c-table c-table--mini" style="border-collapse: collapse;">
<thead>
<tr>
<th>Parent Object</th>
<th>Sub object</th>
<th>Possible values</th>
<th>Effect</th>
<th>Since</th>
</tr>
</thead>
<tbody>
<tr>
<td>pageTree</td>
<td>layoutStyle</td>
<td><code>sidebar</code> (Enum: any of <code>sidebar</code> or <code>fixed</code>)</td>
<td>Sets the layout type for the page tree. Sidebar implements a wrapper div that wraps the whole site; the sidebar will be next to the site. Using <code>fixed</code> the page tree is rendered on the right side and is fixed positioned. No wrapper div is rendered. This can be handier for <a href="https://bedrockapp.org/from-prototype-to-production/">delivery</a>.</td>
<td>1.35</td>
</tr>
<tr>
<td>js</td>
<td>minify</td>
<td><code>true/false</code> (Boolean)</td>
<td>Enable or disable JS minification</td>
<td>1.35</td>
</tr>
<tr>
<td>css</td>
<td>purge</td>
<td><code>true/false</code> (Boolean)</td>
<td>Enable or disable purgeCSS</td>
<td>1.35</td>
</tr>
<tr>
<td>css</td>
<td>minify</td>
<td><code>true/false</code> (Boolean)</td>
<td>Enable or disable CSS minification</td>
<td>1.35</td>
</tr>
<tr>
<td>css</td>
<td>compiler</td>
<td><code>scss</code>/<code>postcss</code>/ (Boolean)</td>
<td>Choose your CSS compiler: Sass (SCSS) or PostCSS. For postcss, use files in <code>content/postcss</code>. For SCSS use files in <code>content/scss</code>.</td>
<td>1.35</td>
</tr>
<tr>
<td>styleguide</td>
<td>&nbsp;</td>
<td><code>true/false</code> (Boolean)</td>
<td>Enable or disable the style guide</td>
<td>–</td>
</tr>
<tr>
<td>styleguide</td>
<td>snippetlanguage</td>
<td><code>html</code>, <code>pug</code></td>
<td>This modifies the language snippets shown in the styleguide.</td>
<td>–</td>
</tr>
<tr>
<td>styleguide</td>
<td>colors</td>
<td><code>./content/scss/_settings.colors.scss</code></td>
<td>Path to the SCSS file specifying colors (for the color feature in the styleguide which shows the project’s colors in a visual way).</td>
<td>–</td>
</tr>
<tr>
<td>styleguide</td>
<td>categoryOrder</td>
<td>Example:
<p>&nbsp;</p>
<pre><code>categoryOrder: [
  'Style guide',
  'Patterns',
  'Overviews',
  'Components',
],</code></pre>
</td>
<td>Order of the documentation categories.</td>
<td>–</td>
</tr>
<tr>
<td>styleguide</td>
<td>componentCategories</td>
<td>Example:
<p>&nbsp;</p>
<pre><code>componentCategories: {
  b: 'Bootstrap additions',
  bc: 'Bootstrap custom components',
  br: 'Bedrock components',
  c: 'Custom components'
}</code></pre>
</td>
<td>Which component categories should exist.</td>
<td>–</td>
</tr>
<tr>
<td>icons</td>
<td>generateIconFont</td>
<td><code>true/false</code> (Defaults to false)</td>
<td>Specify whether to generate an icon font.</td>
<td>–</td>
</tr>
<tr>
<td>icons</td>
<td>svgIconClassPrefix</td>
<td>Example: <code>svg-icon</code> (String)</td>
<td>Specify the CSS class for direct SVG icons.</td>
<td>–</td>
</tr>
<tr>
<td>icons</td>
<td>iconFontClassPrefix</td>
<td>Example: <code>if</code> (String)</td>
<td>Specify the CSS class for icon font icons.</td>
<td>–</td>
</tr>
<tr>
<td>icons</td>
<td>iconFontPath</td>
<td>Example: <code>"./content/scss/_icon-font.scss"</code> (String)</td>
<td>Specify the path where icon font CSS gets generated. Note that this is untested with the new PostCSS feature in 1.34.</td>
<td>–</td>
</tr>
</tbody>
</table>

<h3>Deprecated config items</h3>
<table class="c-table c-table--mini">
<thead>
<tr>
<th>Parent Object</th>
<th>Sub object</th>
<th>Possible values</th>
<th>Effect</th>
<th>Removed when?</th>
</tr>
</thead>
<tbody>
<tr>
<td>icons</td>
<td>hasSvgIcons</td>
<td><code>true/false</code></td>
<td>Specify whether to enable SVG icon support.</td>
<td>1.10</td>
</tr>
<tr>
<td>purgeCSS</td>
<td></td>
<td><code>true/false</code></td>
<td>Enable/disable purge (now part of the <code>css</code> object).</td>
<td>1.35</td>
</tr>
</tbody>
</table>
</div>


