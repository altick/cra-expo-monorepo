# Setup the projects

## Web - Create React App
```
npx create-react-app app-web --typescript
```

## Native - Expo
```
expo init AppNative
```
## Shared
- `npm init` in the root of the shared project
- Create .gitignore in the root of the shared project


## Cleanup
- Remove .git folders from web and native folders
- `git init` in the root of the monorepo


# Configure the shared project

## Expo

- rn.config.js

```js
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
```

- babel.config.js

`npm i -D babel-plugin-module-resolver`

```js
module.exports = function(api) {
  ...
  return {
    ...
    plugins: [
        ...
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@shared': '../shared/src',
        },
      }],
    ]
  };
};
```

- tsconfig.json
```json
{
    "extends": "./tsconfig.paths.json",
    ...
}
```

- tsconfig.paths.json
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@shared/*": ["../shared/src/*"]
        }
    }
}
```

## Web app

- Customize CRA

`npm i -D customize-cra react-app-rewired`

- config-overrides.js
```js
const { override, babelInclude, addWebpackAlias, removeModuleScopePlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
  removeModuleScopePlugin(),
  babelInclude([path.resolve('src'), path.resolve(__dirname, '../shared')]),
  addWebpackAlias({
    '@shared': path.resolve(__dirname, '../shared/'),
  }),
);
```

- package.json
```json
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

- tsconfig.json
```json
{
    "extends": "./tsconfig.paths.json",
    ...
}
```

- tsconfig.paths.json
```json
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@shared/*": ["../shared/src/*"]
        }
    }
}
```

## Shared project
- `npm i -D @babel/runtime`