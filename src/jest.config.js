module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testTimeout: 60000,
}
