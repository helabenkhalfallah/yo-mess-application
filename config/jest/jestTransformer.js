// eslint-disable-next-line import/no-extraneous-dependencies
module.exports = require('babel-jest').createTransformer({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
      },
    ],
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
  ],
});
