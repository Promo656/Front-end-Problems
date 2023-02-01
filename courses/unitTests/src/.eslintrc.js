module.exports = {
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  env: {
    browser: true,
  },
};
