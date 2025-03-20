const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const JavascriptObfuscator = require("webpack-obfuscator")
const AutoProWebpackPlugin = require('@auto.pro/webpack-plugin')
const ProgressPlugin = require('progress-bar-webpack-plugin')
const Unpack = require('./devUnpack')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const DevServer = require('./devServer')
const CopyWebpackPlugin = require('copy-webpack-plugin');


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
    ui: ["auto"],
    // entry: {
    //     key: ''
    // }
})

const config = {
    entry: {
        app: path.resolve(__dirname, "../src/index.ts"),
    },
    output: {
        filename: "auto.js",
        path: path.resolve(__dirname, "../dist"),
        library: {
            name: 'MyLibrary',
            type: 'var',
        },
        // libraryTarget: "commonjs2"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts$/,
                // exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
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
            new ESLintWebpackPlugin({
                extensions: ['ts'],
                // fix: true, // 自动修复

            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [__dirname + '/../dist/auto.js']
            }),
            compilePlugin,
            new ProgressPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, '../node_modules/assttyys_ui/dist/index.html'), to: '.' },
                ]
            }),
            new Unpack(),
            new DevServer(),
        ]
        // config.devtool = 'source-map'
    } else {
        config.plugins = [
            new ESLintWebpackPlugin({
                extensions: ['ts'],
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [__dirname + '/../dist/auto.js'],
            }),
            // new JavascriptObfuscator({
            //     compact: true,
            //     identifierNamesGenerator: "dictionary",
            //     identifiersDictionary: dictionary,
            //     target: "node",
            //     transformObjectKeys: false,
            //     stringArray: true,
            //     stringArrayEncoding: ['rc4'],
            // }),
            compilePlugin,
            new ProgressPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, '../node_modules/assttyys_ui/dist/index.html'), to: '.' },
                ]
            }),
        ]
    }

    return config
}