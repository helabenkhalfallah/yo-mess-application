// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').createTransformer({
  babelrc: false,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],

  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
  ],
});
