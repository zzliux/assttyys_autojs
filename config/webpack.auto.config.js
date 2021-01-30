const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const JavascriptObfuscator = require("webpack-obfuscator")
const AutoProWebpackPlugin = require('@auto.pro/webpack-plugin')
const ProgressPlugin = require('progress-bar-webpack-plugin')

const dictionary = []
for (let i = 1024; i < 2048; i++) {
    dictionary.push(
        i
            .toString(2)
            .replace(/1/g, "ν")
            .replace(/0/g, "v")
    )
}

const compilePlugin = new AutoProWebpackPlugin({
    ui: ["app"],
    // entry: {
    //     key: ''
    // }
})

const config = {
    entry: {
        app: path.resolve(__dirname, "../src/index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "var"
        // libraryTarget: "commonjs2"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.plugins = [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: []
            }),
            compilePlugin,
            new ProgressPlugin()
        ]
        config.devtool = 'source-map'
    } else {
        config.plugins = [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: []
            }),
            new JavascriptObfuscator({
                compact: true,
                identifierNamesGenerator: "dictionary",
                identifiersDictionary: dictionary,
                target: "node",
                transformObjectKeys: false,
                stringArray: true,
                stringArrayEncoding: ['rc4'],
            }),
            compilePlugin,
            new ProgressPlugin()
        ]
    }

    return config
}