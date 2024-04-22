module.exports = {
    moduleNameMapper: {
      '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    transformIgnorePatterns: [
      '/node_modules/(?!.*\\.(js|jsx|ts|tsx)$)',
      '/path/to/your/css/files/.*\\.css$',
    ],
  };
  