'use strict';

const frontMatter = require('front-matter');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const paths = require('../paths');

let config;
if (process.env.NODE_ENV == "production") {
  config = require('./prod-config');
} else {
  config = require('./config');
}

module.exports = {
  discover: function () {
    const blogPosts = glob.sync(paths.content.blogPosts)
      .map(function (blogPostPath) {

        const parsedPath = path.parse(blogPostPath);
        const fileContent = fs.readFileSync(blogPostPath, 'utf8');
        const parsedFile = frontMatter(fileContent);
        const filename = parsedPath.name;
        const extension = parsedPath.ext;

        parsedFile.attributes.filename = filename;

        if (!parsedFile.attributes.title) {
          parsedFile.attributes.title = filename.replace(/-/g, ' ');
        }

        parsedFile.url = filename.replace('.md','').replace('-','/').replace('-','/').replace('-','/')

        return parsedFile;
      }).sort().reverse();


    return {
      allBlogPosts: blogPosts
    };
  }
};
