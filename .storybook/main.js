const path = require("path");

const webpack = require("webpack");

module.exports = {
  stories: ["../src//**/*.stories.js"],
  addons: [],
  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^\./, (resource) => {
        if (/\/node_modules\//.test(resource.context)) return;
        let overrite = false;
        resource.dependencies.forEach((a) => {
          if (
            a.constructor.name === "HarmonyImportSpecifierDependency" &&
            /\w+(?<!Loading)Container$/.test(a.id)
          ) {
            overrite = true;
            a.id = "default";
          }
        });
        if (overrite) resource.request = path.resolve(__dirname, "./Stub");
      })
    );
    console.dir(config, { depth: null });

    return config;
  },
};
