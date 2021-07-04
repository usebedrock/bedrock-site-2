---
title: "Bedrock 1.32.0 notice"
date: "2021-06-08"
author: Wolfr_
---

Attention! There is now a difference how Javascript gets transpiled in the latest Bedrock version.

It used to be that everything would get put into a big `bundle.js`.

Now we are separating out the bundle of the code needed to run Bedrock and the code of the prototype itself. They are in 2 files now called `bundle-prototype.js` and `bundle-client.js`.

This way, external developers receiving the prototype have an easier time integrating, and we can also potentially change the way these get transpiled separately through a setting in the future.

How to upgrade? There is some manual work involved.

- Run `bedrock upgrade --dev`  in the root folder (make sure you have the Bedrock CLI installed [https://github.com/usebedrock/bedrock-cli](https://github.com/usebedrock/bedrock-cli) )
- To upgrade old prototypes, you need to change the reference to `bundle.js` in `master.pug` to

script(src='/js/bundle-client.js')  
script(src='/js/bundle-prototype.js')

- Then, remove this line in `content/index.js`: `import "../../core/js/index";`

Feedback & issues welcome.

_Update June 9: We've added [better docs](http://bedrockapp.org/2021/06/09/docs-update/)._
