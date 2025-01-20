/** @type {import('jest').Config} */
const config = {
  detectOpenHandles: true,
  collectCoverage: true,
  collectCoverageFrom: ["app/**"],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      lines: 0,
      functions: 0,
    },
  },
  moduleNameMapper: {
    "^../db/connection.js$": "<rootDir>/tests/util/mockConnection.js",
  },
  rootDir: "./",
};

module.exports = config;
