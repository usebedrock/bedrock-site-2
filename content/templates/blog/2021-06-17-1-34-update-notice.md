---
title: "1.34 update notice"
date: "2021-06-17"
author: Wolfr_
---

This is a notice for the upcoming 1.34 release which provides support for using [PostCSS](https://postcss.org/) as well as [PurgeCSS](https://purgecss.com/).

If you want to make use of the new PostCSS feature, you will need to add a file called `postcss.config.js` to the root of your project with following contents:

```
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

module.exports = [atImport, autoprefixer];
```

This manual update is needed because the upgrade mechanism from [bedrock-cli](https://github.com/usebedrock/bedrock-cli) only upgrades the `core` folder.

If you update an old project it is also wortwhile to copy/paste the new dependencies, because that also doesn't get updated automatically. Truth be told, we could do better in terms of upgradeability. If you are stuck with anything, please file a Github issue and we can try to help.
