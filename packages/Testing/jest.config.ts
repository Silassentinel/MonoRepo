import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  verbose: true,
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
  ],
};

export default config;
