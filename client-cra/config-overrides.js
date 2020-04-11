// const { injectBabelPlugin } = require('react-app-rewired');
const { addBabelPlugin } = require('customize-cra');

module.exports = function override(config, env) {
  config = addBabelPlugin('relay', config);
  return config;
}