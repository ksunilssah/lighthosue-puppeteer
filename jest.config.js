'use strict';

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/performance/**/*-test.js'],
  globalSetup: './tests/utilities/jestStartup.js',
  globalTeardown: './tests/utilities/jestTeardown.js',
  //testRegex: '(/-test/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  //testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'mjs'],
};
