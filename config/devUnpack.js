const ConcatSource = require("webpack-sources").ConcatSource;

class Unpack {
    apply(compiler) {
        compiler.hooks.emit.tapAsync("Unpack", (compilation, callback) => {
            compilation.chunks.forEach((chunk) => {
                chunk.files.forEach((file) => {
                    let src = compilation.assets[file].source();
                    src = src.replace(/\neval\(".+"\);\n/g, (line) => line.replace(/(?<!\\)\\n/g, '\n').replace(/(?<!\\)\\t/g, '\t').replace(/\\"/g, '"').replace(/\\\\/g, '\\').replace(/\neval\("|"\)\n$|\\r/g, ''));
                    compilation.assets[file] = new ConcatSource(src);
                });
            });
            callback();
        });
    }
}
module.exports = Unpack;
