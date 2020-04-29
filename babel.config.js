module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
  ],
  env: {
    test: {
      plugins: ["babel-plugin-macros", "babel-plugin-require-context-hook"],
    },
  },
};
