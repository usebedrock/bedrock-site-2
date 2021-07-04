---
title: "How to add Tailwind to Bedrock"
date: "2021-06-17"
author: Wolfr_
---

**Update June 26**: We now have a Tailwind starter branch. Simply run `npx degit usebedrock/bedrock#tailwind2 my-bedrock-tailwind-project` to get started.

This is available if you use a pre-release of Bedrock 1.34, which is on the development branch.

To try this, grab a fresh Bedrock install:

```
npx degit usebedrock/bedrock#develop my-bedrock-project
```

Now, go into the project and the code. First you will want to set your CSS compiler to PostCSS in the `bedrock.config.js` file:

```
css: {
  compiler: 'postcss',
    minify: false,
    purge: false
}
```

The default CSS compiler is `scss`.

Now, install these dependencies as devDependencies:

```
npm i -D tailwindcss
npm i -D @tailwindcss/typography
```

The typography plugin is optional but I like it so I put it here as a default. Add a Tailwind config file:

```
touch tailwind.config.js
```

Add contents:

```
// tailwind.config.js

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  separator: '_',
}
```

Note that the `_` separator is needed for Pug. Any Tailwind example you copy paste will need to have the `:` that is used to for things like hover or dark mode be changed into `_` (read [docs](https://tailwindcss.com/docs/configuration#separator)).

Then change the default `postcss.config.js` in Bedrock (none found? Check this [post](http://bedrockapp.org/2021/06/17/1-34-update-notice/)) from:

```
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = [atImport, autoprefixer];
```

To

```
const atImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = [atImport, tailwindcss, autoprefixer];
```

You can use this mechanism to add any PostCSS plugin you like really. Now test if it works by going to `content/postcss/main.css` and loading Tailwind by adding these lines:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you can look at `/tmp/main.css` (tmp is where files are written to temporarily in dev mode) and be shocked at the 4Mb CSS file.

You will now want to enable CSS purging in the `bedrock.config.js`. Change

```
  css: {
    compiler: 'postcss',
    minify: false,
    purge: false
  },
```

to

```
  css: {
    compiler: 'postcss',
    minify: false,
    purge: true
  },
```

Restart bedrock (because you made config changes). Now look at the output again. In the `tmp` folder you will the same 4Mb CSS file. But if you run `npm run build`, you will see a much smaller (+-11kb on the default Bedrock install) in the `dist` folder.

This is because we purge the CSS using the HTML output. This can be used to have a final version of your CSS that has a reasonable file size.

Note that the purge feature is available regardless of using PostCSS. So you can also purge your SCSS output now. As noted in some Github [issues](https://github.com/usebedrock/bedrock/issues), Bedrock might as well be used to make production sites if we can put in just a few more changes (like minifying CSS and JS).

As some may know I am not a big fan of Tailwind, but it has to be said that because of Tailwind I now implemented PostCSS and PurgeCSS support in Bedrock, which I'm sure are good features on their own.

Yeehaw!
