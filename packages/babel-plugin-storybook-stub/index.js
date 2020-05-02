const cpath = require("path");

const packageName = require("./package.json").name;

module.exports = function ({ parse }) {
  return {
    visitor: {
      ImportSpecifier: (path, state) => {
        const importedNameToStubRegex = new RegExp(
          state.opts.importedNameToStub
        );
        if (importedNameToStubRegex.test(path.node.imported.name)) {
          const importName = path.node.imported.name;
          const importPath = state.opts.stubWith
            ? state.opts.stubWith.replace(
                "<rootDir>",
                cpath.relative(
                  cpath.dirname(state.filename),
                  state.file.opts.root
                )
              )
            : `${packageName}/Stub`;
          const d = parse(`import ${importName} from "${importPath}";`, {
            sourceType: "module",
          }).program.body[0];
          path.parentPath.replaceWith(d);
        }
      },
    },
  };
};
