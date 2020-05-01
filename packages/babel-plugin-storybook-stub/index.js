const t = require("babel-types");

module.exports = function () {
  return {
    visitor: {
      ImportSpecifier: (path) => {
        console.log(path.node.imported.name);
        // TODO: configurable
        if (/\w+Container$/.test(path.node.imported.name)) {
          console.log("replace");
          console.log(path.parentPath);
          const specifier = t.importDefaultSpecifier(
            t.identifier(path.node.imported.name)
          );
          // TODO: configurable
          const d = t.importDeclaration(
            [specifier],
            t.stringLiteral("babel-plugin-storybook-stub/Stub")
          );

          // TODO: refactor? require('@babel/parser').parse('import Hoge from "./a";', { sourceType: 'module'})
          path.parentPath.replaceWith(d);
        }
      },
    },
  };
};
