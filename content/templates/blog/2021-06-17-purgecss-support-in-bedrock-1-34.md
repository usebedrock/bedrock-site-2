---
title: "PurgeCSS support in Bedrock 1.34"
date: "2021-06-17"
author: Wolfr_
---

In Bedrock 1.34 we have added the ability to purge your CSS. To enable it, simpy go to `bedrock.config.js` and set `purgeCSS` to true.

What does this do? When you run `npm run build`, Bedrock generates a static site for you. Purge CSS analyzes the output of the HTML, then compares it against the output of the CSS, then removes any classes that you don't actually use in the HTML in the CSS.

[Tailwind](https://tailwind.com/) heavily depends on this logic, since by default it ships a 4Mb file full of utility classes.

However, this could be useful for any website project. It's easy to forget a bunch of code. It's also a lot of work to optimize your dependencies all the time. Why not automate it?

One specific thing to note is that if you use JS to add classes dynamically (as one often does), you can set a special flag for the Purge CSS parser to ignore those classes. See this [document](https://github.com/FullHuman/purgecss-docs/blob/master/whitelisting.md).
