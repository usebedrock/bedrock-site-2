---
title: "Bedrock CLI upgrade"
date: "2021-06-21"
author: Wolfr_
---

Attention to all Bedrock users! Please upgrade your CLI if you wish to keep upgrading Bedrock projects.

```
 npm install -g bedrock-cli
```

The new 3.1.0 CLI version adds an option to upgrade Bedrock to the “canary” version, which is one version in front of “development”. To do so, run the following command:

```
bedrock upgrade --canary
```

This gives you access to the latest Bedrock release, where we implemented minification of CSS and JS.

We used this release to get rid of some legacy code, which no one should need anymore.

_Note: If you are upgrading from an old version of Bedrock (E.g. 1.10-1.17) for some reason, you might want to use the 2.4.0 version of `bedrock-cli`, but to my knowledge, this would be a super niche use case._
