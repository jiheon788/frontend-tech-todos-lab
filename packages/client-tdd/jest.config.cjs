module.exports = {
  setupFilesAfterEnv: ["jest-plugin-context/setup", "./jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.svg$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^/vite.svg$": "<rootDir>/public/vite.svg",
  },
};
