---
title: "Minify JS and CSS in Bedrock 1.35"
date: "2021-06-21"
author: Wolfr_
---

We're on a roll! In the upcoming Bedrock 1.35, you can minify CSS and JS files. We want to test this first with some real projects, so this is on the `canary` branch. If you're feeling adventurous, upgrade your Bedrock project with:

```
# Install new Bedrock CLI 3.1.0 globally
npm i -g bedrock-cli
# Upgrade your project
bedrock upgrade --canary
```

Then change your config to reflect the desired changes. These are the defaults:

```
module.exports = {
  js: {
    minify: false
  },
  css: {
    compiler: 'scss',
    minify: false,
    purge: false
  },
```

For a full production-style build, change it up to:

```
module.exports = {
  js: {
    minify: true
  },
  css: {
    compiler: 'scss',
    minify: true,
    purge: true
  },
```

We hope you enjoy our road towards being able to use Bedrock as production output.
