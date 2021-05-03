module.exports = async () => {
  return {
    verbose: true,
    rootDir: './src',
    moduleNameMapper: {
      '\\.(css|scss|jsx)$': '<rootDir>/__mocks__/styleMock.js',
    },
  };
};
