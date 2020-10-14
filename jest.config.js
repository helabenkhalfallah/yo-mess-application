module.exports = {
  // how jest will transform ressources
  transform: {
    '^.+\\.(js|jsx|ts)$': '<rootDir>/config/jest/jestTransformer.js',
    '^.+\\.(css|less|scss)$': '<rootDir>/config/jest/styleTransformer.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
     '<rootDir>/config/jest/assetsTransformer.js',
  },

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // cache directory
  cacheDirectory: '<rootDir>/jest/tmp',

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // coverage reporters
  coverageReporters: [
    'text',
    'html',
  ],

  // coverage acceptance percent
  // the following configuration jest will fail if there is less than 80% branch,
  // line, and function coverage, or if there are more than 10 uncovered statements.
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    '<rootDir>/config/jest/enzyme.config.js',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/jestOptions.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/*-test.js?(x)',
    '<rootDir>/src/**/?(*.)+(spec|test).js?(x)',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/jest/tmp/',
  ],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    // eslint-disable-next-line no-useless-escape
    '/node_modules/(?!(antd|rc-|@antd))/',
    '<rootDir>/jest/tmp/',
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
