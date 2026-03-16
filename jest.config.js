export default {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.cjs'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg|avif)$': '<rootDir>/__mocks__/fileMock.js',
  }
}