---
title: "Setting a class to the html or body tag in Bedrock"
date: "2021-06-22"
author: Wolfr_
---

Bedrock provides two default variables: `htmlClass` and `bodyClass`. When you want to set an HTML class for every page, simply go to `_layouts/master.pug` and find these lines:

```
block pageVariables
    //- Use this block to append page variables in templates
    - var projectTitle = "Bedrock"
    - var htmlClass = ""
    - var bodyClass = ""
```

Now you can change the empty string to something that you like.

If you want to only add a certain body class in a specific template, use Pug's [template inheritance](https://pugjs.org/language/inheritance.html) to append to the block. For example, let's say you already have a utility class to set full height on the `pageVariables` block in `master.pug`, but you want to set a specific body class on another page, it will look like this.

In `master.pug`:

```
block append pageVariables
    - var htmlClass = "u-full-height"
    - var bodyClass = "u-full-height"
```

in your template (do repeat the original `class` value):

```
block append pageVariables
    - var bodyClass = "u-full-height your-specific-class"
```

You can use this technique to set global variables or page-specific variables; or even page-specific variables that inherit to deeper templates. You could probably be more clever than this code and append to the original value too. Anyone knows how?
