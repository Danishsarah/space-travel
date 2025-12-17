module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/(?!(nanoid)/)"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};
