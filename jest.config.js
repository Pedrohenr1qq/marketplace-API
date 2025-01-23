/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper:{
    "@/(.*)$": "<rootDir>/src/$1",
    "@test/(.*)$": "<rootDir>/tests/$1"
  },
  testMatch: ["<rootDir>/tests/**/*.(test|spec).ts"],
};