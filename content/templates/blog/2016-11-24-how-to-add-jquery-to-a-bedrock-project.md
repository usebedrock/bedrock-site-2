---
title: "How to add jQuery to a Bedrock project"
date: "2016-11-24"
author: Wolfr_
---

First, install jQuery using npm:

```
npm install jquery
```

Then, go to `content/js/index.js` and add the following line:

```
window.$ = window.jQuery = require('jquery');
```

You can now write jQuery! Test it with the following code which will turn everything green:

```
$(document).ready(function() {
$('*').css('background', 'green');
});
```
