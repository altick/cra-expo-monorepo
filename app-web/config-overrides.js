const { override, babelInclude, addWebpackAlias, removeModuleScopePlugin, addWebpackPlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([path.resolve('src'), path.resolve(__dirname, '../shared/src')]),
  addWebpackAlias({
    '@shared': path.resolve(__dirname, '../shared/src/'),
  }),
);