---
title: "Common errors when upgrading to Bedrock 1.10"
date: "2018-07-02"
author: Wolfr_
---

### Wrong config

If you upgrade Bedrock and you get an error like this:

```
path.js:28
throw new TypeError('Path must be a string. Received ' + inspect(path));
^

TypeError: Path must be a string. Received undefined
at assertPath (path.js:28:11)
at Object.dirname (path.js:1349:5)
at Object.<anonymous> (
```

It means your config is out of date.

Here's the base config for Bedrock, that you can copy/paste from here easily to fix the issue:

```
/**
 * Bedrock configuration
 * For docs, see https://bedrockapp.org/documentation/configuration/
*/

module.exports = {
  styleguide: {
    snippetLanguage: 'html',
    colors: './content/scss/_colors.scss',
    categoryOrder: [
      'Style guide',
      'Design patterns',
      'Components'
    ],
    componentCategories: {
      aov: 'Overviews',
      c: 'Components',
    }
  },
  icons: {
    generateIconFont: true,
    iconFontPath: "./content/scss/_icon-font.scss",
    svgIconClassPrefix: 'o-svg-icon',
    iconFontClassPrefix: 'if'
  },
  pug: {
    pretty: true,
    basedir: "./content"
  },
  prettify: {
    logSuccess: false,
    indentSize: 2,
    unformatted: ['pre', 'textarea'],
    extraLiners: ['body']
  },
};
```

### Variable overrides file does not exist

If you get an error like this:

```
[16:42:29] Error in plugin 'gulp-sass'
Message:
    core/scss/prototype.scss
Error: File to import not found or unreadable: ../../content/scss/br-variables-override
       Parent style sheet: /Users/user/Sites/projects/my-prototype/core/scss/prototype.scss
        on line 40 of core/scss/prototype.scss
>> @import "../../content/scss/br-variables-override";
   ^
```

Create a new file inside `/content/scss` called `_br-variables-override.scss`. It can be empty, but I recommend putting in the following content:

```
/* ==========================================================================
  Variables override
  Overide variables set in core/scss/prototype.scss with your own
   ========================================================================== */

// Example: your code is pixel based, use $br-rem-multiplier of 0.625
// $br-rem-multiplier: 1;

// Example: your code is rem-based, where 1rem = 10px, use $br-rem-multiplier of 1
$br-rem-multiplier: 0.625;
```

We are sorry for the manual hassle, and intend to minimize the minimal changes needed to upgrade to newer Bedrock versions in the future.

### Errors in style guide

If you encounter an error like this:

```
TypeError: /Users/user/Sites/projects/project/bedrock/core/templates/styleguide/component-group.pug:17
    15| 
    16|     each component in componentGroup.components
  > 17|         +sample(component)
    18| 

pug_mixins.sample is not a function
```

Make sure your master.pug template starts with the following code:

```
//- Globally expose mixins without output, needed for prototypes
include ../../../core/templates/mixins/icon
include ../../../core/templates/mixins/render-page-tree
include ../../../core/templates/mixins/sample
include ../../../core/templates/mixins/styleguide-settings
include ../../../core/templates/mixins/languages
```
