---
title: "Windows Support"
date: "2017-02-13"
author: Wolfr_
---

Up until this point we haven't really focussed on Windows support for Bedrock. Some recent projects required us to also make the software work on Windows. We were able to get Bedrock working with only a few minor tweaks.

To set up Bedrock on a clean Windows install, you need to download:

- Node from the official node.js website (use the installer)
- Git from the official Git website (use the installer)
- Bedrock from the [repository](https://github.com/mono-company/bedrock) (Use the "download" option, or use SSH if you set up an SSH agent on your machine)

Then follow the instructions, which basically amount to installing `gulp` globally, running `npm install` to get the required dependencies, and then running Bedrock using the `gulp` command.
