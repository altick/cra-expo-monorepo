/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const extraNodeModules = {
  shared: path.resolve(__dirname, '../shared')
}

const watchFolders = [extraNodeModules.shared];

module.exports = {
  resolver: {
    extraNodeModules
  },
  watchFolders
};
