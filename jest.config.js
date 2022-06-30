module.exports = {
    testPathIgnorePatterns: ["/node_modules", "/.next/"],
    setupFilesAfterEnv: [
      "<rootDir>/src/common/tests/setupTests.ts"
    ],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    moduleNameMapper: {
      "\\.(scss|css|sass)$": "identity-obj-proxy"
    },
    testEnvironment: "jsdom",
    collectCoverage: false,
    collectCoverageFrom: [
      "src/**/*.tsx",
      "!src/**/*.spec.tsx",
      "!**/node_modules/**",
      "!**/vendor/**"
    ],
    coverageReporters: ['lcov', 'json']
  }