---
title: "Bedrock 1.10: introducing Bedrock bases"
date: "2018-06-18"
author: Wolfr_
---

We are glad to announce a new thing: Bedrock bases.

We worked on a method to get started with Bedrock in an easier manner - a method that makes you set up less things and get prototyping faster.

With the release of Bedrock Bases we are providing a “base” for 2 common web frameworks: Bootstrap 4 and Material Design.

A base consists of an implementation which shows a few example templates, a styleguide which documents the framework, and the HTML/CSS components and Javascript already in place.

Now it's up to you to put things together to prototype your dream app. Fork it, document your changes and build your custom environment. You'll be working in an integrated environment that is optimized for productivity.

Here's a few screenshots of what the Bedrock bases look like - and links to the online versions:

[![](https://bedrockapp.org/wp-content/uploads/2018/06/Screen-Shot-2018-06-19-at-22.11.10.png)](http://materialbase.bedrockapp.org/styleguide/docs/introduction.html)

The [Material](http://materialbase.bedrockapp.org/styleguide/docs/introduction.html) base styleguide home page.

![](https://bedrockapp.org/wp-content/uploads/2018/06/Screen-Shot-2018-06-19-at-22.17.37.png)

The navbar component in the [Bootstrap 4](http://bs4base.bedrockapp.org/styleguide/docs/introduction.html) base.

So, why Bedrock bases?

At [Mono](https://mono.company/) we have maintained starting points like this for our own work internally, and we figured it would be useful for other people as well.

We depend on a lot of open-source projects for our work and we are happy to give something back.

If you know how to work with Bedrock, the bases are on a branch.

Simply start with checking out Bedrock, using `git clone git@github.com:usebedrock/bedrock.git`; then check out the relevant branch with either `git checkout bootstrap4base` or git checkout `materialdesignbase`.

Run `npm install` to install the necessary dependencies and get things going with `gulp`.

The branches are here:

- [Bootstrap 4](https://github.com/usebedrock/bedrock/tree/bootstrap4base)
- [Material Design](https://github.com/usebedrock/bedrock/tree/materialdesignbase)

If you are new to Bedrock, check out the [basic tutorial](https://bedrockapp.org/documentation/basic-tutorial/).
