const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const JavascriptObfuscator = require("webpack-obfuscator")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const ProgressPlugin = require('progress-bar-webpack-plugin')

const dictionary = []
for (let i = 128; i < 200; i++) {
    dictionary.push(i.toString(2).replace(/1/g, "ν").replace(/0/g, "v"))
}

const config = {
    entry: {
        bundle: path.resolve(__dirname, "../src/html/index.js"),
    },
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, "../dist"),
        libraryTarget: "umd",
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 100k以下的图片使用base64嵌入到html中
                            limit: 1024 * 100,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    name: 'font/[name].[hash:8].[ext]'
                }
            },
        ],
    },
    resolve: {
        extensions: [".js", ".ts", ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src")
        },
    },


}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map'
        config.plugins = [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../src/html/index.html"),
            }),
            new MiniCssExtractPlugin()
        ]
        config.devServer = {
            contentBase: path.join(__dirname, '../dist'),
            port: 9000
        }
    } else {
        config.optimization = {
            minimize: true,
            minimizer: [
                new TerserJSPlugin(),
                new OptimizeCssAssetsPlugin(),
                new ProgressPlugin()
            ]
        }
        config.plugins = [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "../src/html/index.html"),
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false
            }),
            new JavascriptObfuscator({
                compact: true,
                identifierNamesGenerator: "dictionary",
                identifiersDictionary: dictionary,
                target: "browser",
                transformObjectKeys: false,
                stringArray: true,
                stringArrayEncoding: ['rc4'],
            }),
            new ProgressPlugin()
        ]
    }

    return config
}
