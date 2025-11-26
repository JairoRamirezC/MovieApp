export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|avif)$': '<rootDir>/__mocks__/fileMock.js',
  }
}