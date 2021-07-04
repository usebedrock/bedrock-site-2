---
title: "A change to Bedrock's commands"
date: "2018-11-11"
author: Wolfr_
---

I just released Bedrock 1.11, in which we merged a [pull request](https://github.com/usebedrock/bedrock/pull/280) from [Jelle Versele](https://twitter.com/vejersele).

This PR introduces a change to how you run Bedrock. In the previous incarnation, we required gulp to be installed globally.

Leveraging the power of npm scripts, this is not necessary anymore. Yay! In practice this does mean that the command to run Bedrock changes from `gulp` to `npm start`.

The command to create a build changes to `npm run build`.
