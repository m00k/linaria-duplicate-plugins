# linaria-duplicate-plugins

## log
- ```npx preact-cli create typescript linaria-duplicate-plugins```
- install linaria as per [docs](https://github.com/callstack/linaria#installation)
    - ```npm install @linaria/core @linaria/react @linaria/babel-preset @linaria/shaker```
- configure as per [docs](https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md#preact)
    - add `preact.config.js`
    - additionally push `@babel/preset-typescript` to presets in `preact.config.js`
- install `@linaria/webpack-loader`
- remove `@babel/preset-react` from presets in `preact.config.js`
- create [styled custom component](https://github.com/m00k/linaria-duplicate-plugins/commit/da2ef9f087c81a03eb25a4d673692a9db402ac0d#diff-e3ca56b5627437b371d6b16864b11cada83aa8919f5311898a0cc5c25d82eb3eR11) as per [docs](https://github.com/callstack/linaria/blob/master/docs/BASICS.md#styling-custom-components)
- ```npm run build``` leads to `Error: Duplicate plugin/preset detected.`
- install `@babel/preset-react` and add to presets in `preact.config.js`
- ```npm run build``` still leads to `Error: Duplicate plugin/preset detected.`
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
