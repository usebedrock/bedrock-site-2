---
title: "Implementing multi-language prototypes in Bedrock"
date: "2021-06-17"
author: Wolfr_
---

For a recent prototype, the requirement was that we would work in multiple languages. In the case of this project Dutch and English.

Now that things are still fresh, I'm doing this writeup so that I know what to do next time. And maybe this will help some people? Blogging is how I remember ;)

So first of all you will want to make two folders in `content/templates` with the shortcodes for your languages. So in this case a `nl` and and `en` folder.

Choose one of your languages to be the main language. Now, create files that match the URL structure on both sides. So let's say you have an `about.pug` in `en` you will have an `over-ons.pug` in the `nl` part.

Here's how that would look in a `[tree](https://linuxhint.com/bash-tree-command/)` structure:

```
.
|-- en
|   `-- about.pug
`-- nl
    `-- over-ons.pug
```

Now use template extension to extend the template in the non-main language\*. So let's say that `nl` is the main language we are developing in. Then, don't repeat the full template in the `en` version.

Instead use `extends /templates/nl/over-ons` in `en/about.pug` ; and literally only that. The file is needed to create the URL. The extension makes sure the content is exactly the same.

Then, in the “Over ons” template you can then localize content. To make sure you can localize content at all you will need translation strings. Make a new file in `data` called `content-strings.js`. In this file, create a structure as follows:

```
'use strict';

let contentStrings = [
  {
    "readMore": "Lees meer",
    "chooseLanguage": "Kies taal"
  },
  {
    "readMore": "Read more",
    "chooseLanguage": "Choose language"
  },
];

module.exports = contentStrings;
```

Now you can call this structure in your template:

```
#{contentData.contentStrings[0].readMore}
```

This syntax is no fun; and also, we are not showing the right language in the `en` part of the site.

Let's provide a helper function to be able to correctly show the right string in the right language in `master.pug` . Add this code to the `pageVariables` block:

```
- var activeLangIndex = null
- var lang = pathname.split("/")[0];
-
    if (lang == "nl") { activeLangIndex = 0 }
    if (lang == "en") { activeLangIndex = 1 }
- var t = contentData.contentStrings[activeLangIndex]
```

What are we doing here? We are associating the active language with the first part of the URL, and pointing to a lil variable called `t` (for translation, get it?) to be a helper.

Now we can simply write:

```
#{t.readMore}
```

And lo an behold, on the `nl` part it will show up as `Lees meer` and on the `en` part it will show up as `Read more`.

So this is the basic gist of how you would implement multiple languages using the powerful [Pug](https://pugjs.org/) templating language together with Bedrock's content data feature.

* * *

_\*I realize this can get tedious. Bedrock is meant as a prototyping environment and not to create production sites. In our project, we translate a few parts of the prototype to a different language, but in production a CMS or a JS framework with a more full-fledged i8n solution is swapped in._ _However_, _some recent changes to Bedrock made me wonder if we shouldn't just go ahead and try to make Bedrock output ready for production. We are close to having all the features you need for simple websites._

_Perhaps if you really want to go to production you can script the generation of the `en` structure using a helper script. But for small sites it is probably faster to just do the manual work._
