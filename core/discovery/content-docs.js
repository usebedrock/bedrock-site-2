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

function discover() {
  const contentDocs = glob.sync(paths.content.contentDocs.all)
    .map(function (docPath) {
      const parsedPath = path.parse(docPath);
      const fileContent = fs.readFileSync(docPath, 'utf8');
      const parsedFile = frontMatter(fileContent);
      const filename = parsedPath.name;
      const extension = parsedPath.ext;

      parsedFile.attributes.filename = filename;

      if (!parsedFile.attributes.title) {
        parsedFile.attributes.title = filename.replace(/-/g, ' ');
      }

      return parsedFile;
    });

  return {
    allContentDocs: contentDocs,
  };
}

module.exports = {
  discover: discover
};
