---
title: "How to add scripts to header and footer"
date: "2021-06-22"
author: Wolfr_
---

For head-positioned JS, use the default `headerScripts` block in a template:

```
extends /templates/_layouts/master

block append headerScripts
    script(src='/js/my-file.js')


block body
    // My content
```

For footer-positioned JS, use the default `footerScripts` block:

```
extends /templates/_layouts/master

block append footerScripts
    script(src='/js/my-file.js')

block body
    // My content
```
