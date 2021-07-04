---
title: "Bedrock news - February 2018"
date: "2019-02-09"
author: Wolfr_
---

The [design systems event](https://www.meetup.com/Belgian-UI-Design-Meetup/) I held this week inspired me to keep on hacking to make Bedrock better.

I know that not many people use Bedrock, but I want to change that, as I think the workflow that we propose has much to offer.

### Help with using Bedrock

Do you want help with using Bedrock? Troubles setting up Bedrock? Get in touch with me via [Twitter](https://twitter.com/wolfr_2). My DM inbox is open.

### Bedrock changes

![](http://bedrockapp.org/wp-content/uploads/2019/02/52408734-d4e8bf80-2ad3-11e9-995f-d9b0fa3aa78c.png)

- 1.14
    
    - Added a way to tag components with their source to differentiate, for example, between official/unofficial components. The way to do it is to add a `source` to the YAML front matter of the component docs. For example, the `.md` file of a component would look like this:
    
    ```
    ---
    title: My component
    source: Unofficial
    ---
    
    An extra component.
    ```
    
- 1.15
    - Started work on 2 new features
        - A better way to display the component style guide on mobile
        - A way to search components in the styleguide

If you are curious you can check out the [pre-release](https://github.com/usebedrock/bedrock/releases).

### Updated Bedrock bases

Bedrock bases are starting points to use Bedrock with. Using [degit](https://github.com/Rich-Harris/degit) it is super easy to get started.

- The [Bootstrap 4 base](http://bs4base.bedrockapp.org/) has been updated to use Bootstrap 2.1.4.
    - Here's the 5 terminal commands you need to get started with a Bootstrap project:
        - `npm i -g degit`
        - `degit usebedrock/bedrock#bootstrap4base my-bootstrap-project`
        - `cd my-bootstrap-project/`
        - `npm install`
        - `npm start`
- The [Material Design base](http://materialbase.bedrockapp.org/) has been updated to use Material Web Components 0.44.0.
    - Here's what you need to get started with a Material Web Components project
        - `npm i -g degit`
        - `degit usebedrock/bedrock#materialbase my-material-project`
        - `cd my-bootstrap-project/`
        - `npm i`
        - `npm start`

### Updated documentation

I pruned the documentation to make it clearer.

- Basic tutorial
    - The video was removed since it is out of date with how Bedrock works and might cause confusion for newcomers
    - We recommend using [degit](https://github.com/Rich-Harris/degit) to start a new Bedrock project. This has been documented in the basic tutorial.
- Page tree
    - Documentation for the page tree docs page was simplified for clarity
- Updating Bedrock
    - We added docs about the option to update Bedrock from the development branch
