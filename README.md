# linaria-duplicate-plugins

## log
- https://github.com/callstack/linaria#installation
    - ```npm install @linaria/core @linaria/react @linaria/babel-preset @linaria/shaker```
- https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#preact
    - add `preact.config.js` as described
    - additionally push `@babel/preset-typescript` to presets in `preact.config.js`
- install `@linaria/webpack-loader`
- remove `@babel/preset-react` from presets in `preact.config.js`
- create styled custom component as per https://github.com/callstack/linaria/blob/master/docs/BASICS.md#styling-custom-components
- ```npm run build``` leads to `Error: Duplicate plugin/preset detected.`
```
Duplicates detected are:
[
  {
    "alias": "./node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js",
    "dirname": ".",
    "ownPass": false,
    "file": {
      "request": "./node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js",
      "resolved": "./node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js"
    }
  },
  {
    "alias": "./node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js",
    "dirname": ".",
    "ownPass": false,
    "file": {
      "request": "./node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js",
      "resolved": "./node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js"
    }
  }
]
```

## CLI Commands
*   `npm install`: Installs dependencies

*   `npm run dev`: Run a development, HMR server

*   `npm run serve`: Run a production-like server

*   `npm run build`: Production-ready build

*   `npm run lint`: Pass TypeScript files using ESLint

*   `npm run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests


For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
