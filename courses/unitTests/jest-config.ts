import "@testing-library/jest-dom";
import fetch from 'jest-fetch-mock'
fetch.enableMocks()
export default {
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
};
