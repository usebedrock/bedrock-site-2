<h2>Practical tips</h2>
<h3>Adding a selected state to a navigation item</h3>
<p>To add selected state, you can use the global pathname to match against the current URL.</p>
<p>So for example, if the current global pathname is /module/name, and you want to add an active class to an <code>li</code> element, you would write code like&nbsp;<code>li(class=pathname.match(/module/\name/)?'active':'')</code>.</p>
<p>Note that you are basically directly writing Javascript in pug here. This is not a Bedrock feature, it is just a very common example that everyone will need at some point.</p>
<h3>Adding a favicon</h3>
<p>Simply add a favicon.ico in the content folder. Every file in the root of the content folder gets copied to the <code>dist</code>, the folder where your static site result ends up.</p>
