---
title: "Icon fonts & Bedrock 1.6"
date: "2018-04-29"
author: Wolfr_
---

In order to address a security vulnerability, we have updated FontCustom to version 2.0.0 in [Bedrock 1.6](https://github.com/mono-company/bedrock/releases/tag/1.6.0).

In order for the icon font generation to continue working, you need to have `woff2` installed on your system. Instructions are in the [google/woff2](https://github.com/google/woff2) repository.

Don't forget to move the commands to a folder from where commands can be executed. If you use MacOS this is typically something like `/usr/local/bin`.

Since the Gemfile updated, you will need to run `bundle install` when updating existing projects. First you would [upgrade Bedrock](https://bedrock.mono.company/documentation/updating-bedrock/) and then you would run `bundle install` again.
