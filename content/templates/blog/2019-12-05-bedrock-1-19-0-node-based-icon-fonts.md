---
title: "Bedrock 1.19.0: node-based icon fonts"
date: "2019-12-05"
author: Wolfr_
---

For the longest time, we had a Ruby dependency for icon font generation. Thanks to a recent PR by [Xavez](https://twitter.com/xavez) this is no longer the case.

This will make it easier to get Bedrock up and running. Icon fonts are still useful when you have lots of icons. The markup for an icon font is simple whereas having to use repeated inline SVGs can lead to performance issues.

Both icon techniques have their advantages and disadvantages, so that's why we support both. Check out the newest release on [Github](https://github.com/usebedrock/bedrock/releases/tag/1.19.0).
