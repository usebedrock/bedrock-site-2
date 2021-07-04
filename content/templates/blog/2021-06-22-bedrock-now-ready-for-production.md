---
	author: Wolfr_
	date: "22 June 2021"
	time: "16:54"
	title: "Bedrock, now ready for production."
---

It used to be the case that we assumed that if you used Bedrock, you would make a prototype, and it would require a few changes to bring it to production.

For example, a typical process would be that we’d make an HTML/CSS prototype and a JS or PHP developer would take our templates and then extract these to the real app context.

We would write HTML and CSS, document some components, but leave the code non-minified.

If you’d look at most Bedrock installs closely you’d also see a specific `div` structure to make the [page tree](https://bedrockapp.org/documentation/page-index-and-tree/) feature work.

If you’d look at the JS output you’d also see a relatively large bundle that is meant to make the styleguide work.

Lately I was thinking about why we have this distinction: why can’t Bedrock be the tool to also ship the production project?

We already had a build pipeline, we already had a config file. With some additions I thought we could make it work.

If you’ve been following along for the past few days you might’ve seen a lot of activity on the Bedrock repository.

Spurred by 2 recent projects that each came with their own requirements, the stars aligned and I got really deep into extending Bedrock. **The result: it is now possible to use Bedrock to build sites for production**.

The default output of the first page of Bedrock now looks like this:

    <!DOCTYPE html>
    <html dir="ltr" lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bedrock</title>
        <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
        <p>Welcome to Bedrock. This is your homepage. Go to <code>/content/templates/index.pug</code> to find this file and start editing your project.</p>
        <script src="/js/bundle-client.js"></script>
    </body>
    </html>

That’s it. That’s the code. Now, with this output, there is no styleguide and page tree feature. If you want to enable those, you can do so in the configuration. There are now separate config files for development and production.

To get the above output, the config flags you need (in `bedrock.config.prod.js`) are:

    /**
     * Bedrock production configuration
     * ---
     * This object will get merged into the bedrock config object and contains specific values for production
     * Use `NODE_ENV=production npm run build` to run a production build
    */

    module.exports = {
      noIndex: false,
      pageTree: false,
      styleguide: false,
      js: {
        minify: true
      },
      css: {
        minify: true,
        purge: true,
        compiler: 'scss'
      },
    };

This will give you minimal, compressed output it the build.

In this setup we never load the big JS file to make the prototype work (the one that contains jQuery (legacy code see [#367](https://github.com/usebedrock/bedrock/issues/367)), Codemirror for syntax highlighting etc.).

To reflect this new logic, I updated the [from prototype to production](https://bedrockapp.org/from-prototype-to-production/) page.

If you have any questions about Bedrock, don’t be scared to make an issue, comment to a blog post or ask a question [through e-mail](https://mono.company/contact/).

_*This feature is still in a pre-release phase, once it’s stable we will release it to Bedrock’s master branch._