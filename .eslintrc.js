module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@babel',
    'react',
    'jsx-a11y',
  ],
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',

    // reducing code complexity by capping the amount
    // of cyclomatic complexity allowed in a program.
    complexity: [
      'error',
      10,
    ],
    // enforces a maximum depth that blocks can be nested to reduce code complexity.
    'max-depth': [
      'error',
      3,
    ],
    // enforces a maximum number of lines per file,
    // in order to aid in maintainability and reduce complexity.
    'max-lines': [
      'error',
      {
        max: 1000,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // enforces a maximum number of lines per function,
    // in order to aid in maintainability and reduce complexity.
    'max-lines-per-function': [
      'error',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    // enforces a maximum number of parameters in function definitions
    'max-params': [
      'error',
      3,
    ],
    // enforces a maximum number of statements allowed in function blocks.
    'max-statements': [
      'error',
      20,
    ],
    //  enforces a maximum depth that callbacks can be nested
    'max-nested-callbacks': [
      'error',
      2,
    ],
    // max line length
    'max-len': [
      1,
      120,
      2,
      {
        ignoreComments: true,
      },
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always',
      },
    ],
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    'no-console': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/**-test.js?(x)',
        ],
        optionalDependencies: false,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'never',
      },
    ],
  },
};
