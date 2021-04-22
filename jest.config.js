module.exports = async () => {
    return {
        verbose: true,
        moduleNameMapper: {
            "\\.(css|scss|jsx)$": "<rootDir>/__mocks__/styleMock.js"
          }
    };
  };