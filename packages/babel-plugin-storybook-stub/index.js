const cpath = require("path");

const packageName = require("./package.json").name;

module.exports = function ({ types }) {
  return {
    visitor: {
      ImportSpecifier: (path, state) => {
        const importedNameToStubRegex = new RegExp(
          state.opts.importedNameToStub
        );
        if (importedNameToStubRegex.test(path.node.imported.name)) {
          const specifier = types.importDefaultSpecifier(
            types.identifier(path.node.imported.name)
          );
          console.log(state.filename, state.file.opts.root);
          const d = types.importDeclaration(
            [specifier],
            types.stringLiteral(
              state.opts.stubWith
                ? state.opts.stubWith.replace(
                    "<rootDir>",
                    cpath.relative(
                      cpath.dirname(state.filename),
                      state.file.opts.root
                    )
                  )
                : `${packageName}/Stub`
            )
          );

          // TODO: refactor? require('@babel/parser').parse('import Hoge from "./a";', { sourceType: 'module'})
          path.parentPath.replaceWith(d);
        }
      },
    },
  };
};
