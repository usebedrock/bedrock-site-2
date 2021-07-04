---
title: "Bedrock 2 alpha"
date: "2019-09-08"
author: Wolfr_
---

I started working on an early version of Bedrock 2. It is kind of experimental but I have a good feeling that it will replace Bedrock 1 in the end.

Bedrock 2 is an entire rewrite of Bedrock. It uses different technology under the hood but conceptually it is the same.

It provides a prototyping development to quickly iterate on UIs. It provides helpful features like the component styleguide and the page tree that you might know from Bedrock 1.

Technology-wise it runs on [Sapper](https://sapper.svelte.dev/) which in turn uses [Svelte](https://svelte.dev/). Anyone who's been following me on Twitter might know that I've been over the moon about Svelte. In a nutshell, it's just pretty awesome.

While Bedrock 2 is in development, it will ship with Svelte Simple UI (I have to find a better name). Svelte Simple UI is new framework to create UIs in Svelte. It has its own aims: to be Svelte-ish, to have a small bundle size, to not be overly complex.

During Bedrock 2's development, we will work towards making Svelte Simple UI a separate package. But to fully test Bedrock2 we need component code in the system. So the current repo will be a mix-up until we extract the code into a separate repo ([#3](https://github.com/usebedrock/bedrock2/issues/3)).

If you are curious to give it a try, please check out the [Github repository](https://github.com/usebedrock/bedrock2).

### Call for contributors

Everything will be MIT-licensed so anyone can go and do their thing with it.

Because some of the work is a bit outside of my comfort zone I aim to get contributors for this project that are better at Javascript than I am, or that are interested in getting to grips with Svelte and Sapper together.

So, are you a Javascript dev interested in something new? Want to contribute to an OSS project that might very well help you in your day job? Get in touch!
