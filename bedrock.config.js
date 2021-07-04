/**
 * Bedrock configuration
 * For docs, see https://bedrockapp.org/documentation/configuration/
 * Inline docs available in the default config object
*/

module.exports = {
  pageTree: false,
  js: {
    minify: false
  },
  css: {
    compiler: 'scss',
    minify: false,
    purge: false
  },
};
