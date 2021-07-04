---
title: "Adding selected state to a navigation in Bedrock"
date: "2016-07-07"
author: Wolfr_
---

This is not specifically Bedrock related, it's more of a [Jade](http://jade-lang.com/) thing, but I am putting it down here for reference. This is how I add selected states to navigations in a Bedrock context.

When you have a navigation it might follow an HTML structure like this:

```
nav
    a.active(href='/') Page 1
    a(href='/page-2') Page 2
    a(href='/page-3') Page 3
```

Now, how to add an active state to the page when you are on the page? You can directly use Javascript within Jade to check for the pathname:

```
nav
    a(href='/') Page 1
    a(class='#{pathname.match(/page-2/) ? "active" : ""}') Page 2
    a(class='#{pathname.match(/page-3/) ? "active" : ""}') Page 3
```

This works for page 2 and 3, but, what about our home page? The url to match is actually just "/" so we can't match this. We can solve this by adding a variable on the home template:

```
block append pageVariables
    - var isHome = true
```

Then we can call it by checking if the `isHome` variable is true:

```
nav
    a(href='/' class='#{ isHome ? "active" : ""}') Page 1
    a(href='/page-2' class='#{pathname.match(/page-2/) ? "active" : ""}') Page 2
    a(href='/page-3' class='#{pathname.match(/page-3/) ? "active" : ""}') Page 3
```

This method depends on the block `pageVariables` being defined within the `master.jade` template:

```
block pageVariables
    // Nothing here yet, don't remove, styleguide depends on this
```
