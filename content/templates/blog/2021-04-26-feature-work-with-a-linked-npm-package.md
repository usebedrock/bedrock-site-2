---
title: "New experimental feature: work with a linked npm package"
date: "2021-04-26"
author: Wolfr_
---

A new feature is in the works, to work with a linked npm package and still maintain live reloading when making a change.

This blog post is the documentation for that feature.

For the purposes of this example, we will use the imaginary project `method`. Let's say you decide to put the CSS in an NPM package, and the CSS uses SCSS. You want to work on your prototype, but you also want to work directly in the CSS package.

In order to do this, you would open two separate projects in your text editor: one for the CSS and one for the main project.

Now, a workflow problem occurs: a file save in the package folder (contained in `node_modules`) will not trigger a change in your prototype. You'll have to make a new version and re-publish it, and then `npm install` to see the changes. Of course this is not how you want to develop. You can put the styles locally, but then you lose the context of the package. So what do you do? `[npm link](https://docs.npmjs.com/cli/v7/commands/npm-link)` to the rescue. `npm link` allows you to link a local package and use it while developing.

Make sure you have a checked out version of `method-css` (your CSS package repo) and a checked out version of `method-prototype` (your Bedrock repo).

In `bedrock.config.js` add the option:

```
compileNodeModuleCSS: 'method-css',
```

For this to work, we are assuming an `*.scss` file lives in the root of the package. Technically you can have more than one SCSS file, but this is untested.

Install the package in `method-prototype`:

```
npm i method-css
```

Go to `~/Sites/method-css` (or wherever your local project lives) and run npm link

Then go to `~/Sites/method-prototype` (or wherever your local project lives) and run `npm link method-css`.

Make sure the package is referenced in `main.scss`:

```
@import "../../node_modules/method-css/main.scss";
```

Now, if you make a change to the package, it should reflect in the Bedrock prototype, with the live reload working.

_P.S. The code for this feature is not yet public, but will land in a next Bedrock version._

_P.P.S. June 17, 2021: We decided to not ship this feature for now._
