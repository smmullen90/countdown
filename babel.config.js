module.exports = {
  presets: [
    '@babel/env',
    '@babel/react',
    // '@emotion/babel-preset-css-prop',
    // '@babel/preset-typescript',
  ],
  plugins: [
    [
      "module-resolver", {
        "root": ["./src"]
      }
    ],
    // Stage-0
    // '@babel/plugin-proposal-function-bind',

    // Stage-1
    // '@babel/plugin-proposal-export-default-from',
    // '@babel/plugin-proposal-logical-assignment-operators',
    // ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    // '@babel/plugin-proposal-do-expressions',

    // Stage-2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // '@babel/plugin-proposal-function-sent',
    // '@babel/plugin-proposal-export-namespace-from',
    // '@babel/plugin-proposal-numeric-separator',
    // '@babel/plugin-proposal-throw-expressions',

    // Stage-3
    // '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    // '@babel/plugin-proposal-json-strings',
  ]
};
