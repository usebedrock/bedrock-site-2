---
title: "A static site generator history"
date: "2015-12-30"
author: Wolfr_
---

It used to be that I thought a website had to be powered by a CMS... there was just no way around it.

Then I discovered the magic of static site generators.

What is a static site generator? Well, basically it is a bunch of code that compiles to a website. But, unlike a CMS powered website, there is no server side language going on. The site is comprised of a bunch of files that you specified.

The first static site generator I fell in love with was [Jekyll](https://jekyllrb.com/). It took me a while to understand. I am a user interface designer and not an actual programmer. When you try to work with tools like Jekyll for the first time and your world is mostly HTML, CSS, Sketch and Photoshop, there is a lot to learn.

Eventually I thought I had a good grasp of Jekyll and organized a small meetup called Jekyll Camp. This led to the presentation "An introduction to Jekyll":

<iframe width="560" height="315" src="https://www.youtube.com/embed/O7NBEFmA7yA" frameborder="0" allowfullscreen></iframe>

Up to this day is my most viewed video on YouTube, leading me to believe there are plenty of people out there wondering how they should use Jekyll.

But I had a problem with Jekyll: it became too slow. I was not using it to make a small blog or personal site (like most Jekyll website). I was using it to craft the templates for web applications.

Every time you save an HTML file, a static site generator tends to regenerate THE WHOLE SITE. This system works up until the point that your site gets too big and you have to wait too long for your site to recompile.

A co-worker at the time suggested we move to [Wintersmith](http://wintersmith.io/), which used Jade as a templating language (see the previous post). We ported the project I was working at the time to Wintersmith. It was slightly faster but eventually I hit a wall again: render times would take too long again.

At that point, the co-worker in question, [Ruben](https://rocketeer.be/), helped me out own and built his own static site generator that would be faster. He built [renderpipe](https://github.com/rubenv/renderpipe), I started using that, and things were fast again.

Things were fine until my prototype was gigantic enough to hit the same wall of slowness. Again.

After hitting that same "compile" problem in 3 separate environments I was convinced that static site generation was good, but eventually if you are building anything at scale you kind of need a server that gets assets on the fly.

I was prepared to move to some PHP based system using a templating language like [Twig](http://twig.sensiolabs.org/); but luckily colleague [Thomas](http://mono.company/journal/design/four/) found a solution to the problem.

In Bedrock, our static site generator, we use [Express](https://www.npmjs.com/package/express) to serve our [Jade](http://bedrock.mono.company/2015/12/29/jade/) templates on the fly. This makes it much faster in usage when you are coding.

When you use the default `gulp` command, Express is used to render templates on the fly. When you are ready to make a final build, you can use the `gulp build` command, and then you have your regular "static site build".

I worked on a prototype that was so big recently that it took 60 seconds to fully compile. If I would have to wait 60 seconds every time I changed the code, that would be a huge productivity problem. That reminded me of this wonderful comic:

[![compiling](http://bedrock.mono.company/wp-content/uploads/2015/12/compiling.png)](https://xkcd.com/303/) _[XKCD: Compiling](https://xkcd.com/303/)_

For me, a static site generator is an integral part of web application design. I couldn't imagine doing my work without a static site generator anymore. Do you use static site generators in your work?
