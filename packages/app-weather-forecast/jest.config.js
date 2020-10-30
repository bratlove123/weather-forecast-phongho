module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    setupFiles: ['<rootDir>/config/setup.js'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    testRegex: '/src/.*\\.(test|spec)\\.tsx?$',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig.test.json'
      }
    }
  };