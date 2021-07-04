---
title: "How to document an icon font"
date: "2019-11-29"
author: Wolfr_
---

First, make sure icon font generation is active. In `bedrock.config.js` check this:

```
icons: {
    generateIconFont: true,
    ....
```

The loop that you need to document an icon font is as follows:

```
each icon in icons.iconFont
    p #{icon}
    .if(class="if-"+icon)
```

You would place this in a `.pug` file inside the documentation.

You could semantically put it in a proper list:

```
ul.br-icon-font-list
    each icon in icons.iconFont
        li
            .if(class="if-"+icon)
            | #{icon}
```

You can then add some styling if you want:

```
/* Styling for icon font list
   ========================================================================== */

.br-icon-font-list {
  columns: 16rem;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    padding: 0 1rem 1rem 0;
    .if {
      display: inline-block;
      margin-right: 1rem;
    }
  }
}
```

Voila, that is how you document an icon font.
