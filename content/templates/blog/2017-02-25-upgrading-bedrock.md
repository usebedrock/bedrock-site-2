---
title: "Upgrading Bedrock"
date: "2017-02-25"
author: Wolfr_
---

At the moment, upgrading a Bedrock install is a semi-manual process. We are working on automating this as much as possible.

If you are using an older version of Bedrock, it is best to use a combination of the upgrade command provided by the [Bedrock command line interface](https://github.com/mono-company/bedrock-cli) and a diff tool that allows you to diff folders to upgrade your Bedrock install.

Personally I use [DeltaWalker](https://www.deltawalker.com/) to compare my project's folder to a standard Bedrock install.

### Part 1: Automatic upgrade

You can use the Bedrock upgrade command contained in [bedrock-cli](https://github.com/mono-company/bedrock-cli) to update every file in `/core`.

This will update every file in `/core/`.

### Part 2: Transferring files manually

You will then need to manually transfer a few files, depending on how old your Bedrock install is.

These are the files you can transfer as-is:

- `gulpfile.js`
- `.gitignore`

There are some files that didn't exist in older versions of Bedrock that need to be added:

- `.nvmrc`
- `bedrock.config.js`

Within bedrock.config.js you will probably need to set a path to where you use the colors feature. It is not possible to use Bedrock at the moment without using this feature.

You will also need to set whether you want to use icon fonts or SVG icons.

Then there is a tricky one - the `package.json` file. The contents of this one depend on how much custom Javascript you wrote in your project. If you didn't use any Javascript you can transfer the file as is.

But if you wrote Javascript and installed packages via `npm install` you need to list these as `devDependencies`. Within the logic of Bedrock, Bedrock's code itself is a dependency and your application's code is a `devDependency`.

### Making sure your folders are named correctly

We changed some folder names to be able to provide better functionality.

**The Bedrock upgrade tool does not help with this, this is a manual process.**

In the beginning the folder for styleguide components was named `patterns`, then `_patterns`, then `_components`. So to upgrade your Bedrock to the latest install, that folder needs to be named `_components`.

The `_` part of this logic is to disallow Bedrock from indexing Jade templates within `_components` as pages that show up in the page index/page tree.

The same counts for the `_layouts` and optional `_mixins` and `_includes` folders.

Basically your tree has to look like this:

```

.
├── content
│   ├── data
│   ├── docs
│   │   ├── overviews
│   │   └── styleguide
│   ├── icon-font-source     ---> Optional if you use icon fonts
│   ├── icons                ---> Optional if you use svg icons
│   ├── images
│   ├── js
│   ├── scss
│   └── templates
│       ├── _components
│       └── _layouts
│       └── _includes        ---> Optional, depends on how you code your templates
│       └── _mixins          ---> Optional, depends on how you code your templates
├── core
    ├── discovery
    ├── js
    ├── scss
    │   ├── components
    │   └── vendor
    ├── tasks
    ├── templates
    │   ├── includes
    │   ├── layouts
    │   ├── mixins
    │   └── styleguide
    └── util
```

Note that within `core` the includes, layouts and mixins folders do not use an underscore and within `content` they do. So if you are globally replacing file references within the project be careful, because you will run into errors.

So, I hope this helps if you are running into problems upgrading Bedrock.

We are always available to help - just log an [issue](https://github.com/mono-company/bedrock/issues) on Github and we wil try to help out.
