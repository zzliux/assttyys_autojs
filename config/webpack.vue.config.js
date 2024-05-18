const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DevServer = require('./devServer')

module.exports = (env, argv) => {
    return {
        entry: {
            app: './src/templateV3/index.js',
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            // filename: argv.mode === 'development' ? 'web.[hash].js' : "web.js",
            filename: 'web.js',
            libraryTarget: 'umd'
        },
        mode: argv.mode,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    // exclude: /node_modules/,
                    use: {
                        loader: "ts-loader",
                        // options: {   //新增
                        //     appendTsSuffixTo: [/\.vue$/]
                        // }
                    }
                },
                {
                    test: /\.js$/, //用正则匹配文件，用require或者import引入的都会匹配到
                    loader: "babel-loader", //加载器名，就是上一步安装的loader
                    exclude: /node_modules/ //排除node_modules目录，我们不加载node模块中的js哦~
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        // 'postcss-loader'
                    ]

                    //依次使用以上loader加载css文件，postcss-loader可以暂时不加，后面再深入修改webpack配置的时候再说用处
                    //
                    //也可以写成这样 loader："style-loader!css-loader!postcss-loader"
                },
                {
                    test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[ext]?[hash]'
                    }
                    //图片文件大小小于limit的数值，就会被改写成base64直接填入url里面，
                    //不然会输出到dist/img目录下，[name]原文件名，[ext]原后缀，[hash]在url上加上一点哈希值避免缓存。
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[ext]?[hash]'
                    }
                    //和上面一致
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
                    //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
                    options: {   //新增
                        esModule: true,
                    }
                },
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                }
            ]
        },
        resolve: {
            //引入路径是不用写对应的后缀名
            extensions: ['.mjs', '.ts', '.js', '.vue', '.json'],
            //缩写扩展
            alias: {
                //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
                // 'vue$': 'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
                //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
                '@': path.resolve(__dirname, '../src'),
            }
        },
        devtool: false, // argv.mode === 'development' ? 'source-map' : false,
        devServer: {
            port: 3001,
            host: '0.0.0.0',
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'ASSTTYYS NG',
                template: './src/templateV3/index.html'
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [__dirname + '/../dist/index.html', __dirname + '/../dist/web.js']
            }),
            new VueLoaderPlugin(),
            new webpack.ProvidePlugin({
                AutoWeb: '@auto.pro/web',
            }),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
                // 处理aj的api在前端引用时的报错
                // TODO 前端需完全剥离使用aj的方法，要获取数据通过通信获取
                storages: { create: function () { } },
                $shell: { checkAccess: function () { } },
                $images: {},
                context: {
                    getResources: function () {
                        return {
                            getIdentifier: function () { },
                            getDimensionPixelSize: function () { },
                            getDisplayMetrics: function () {
                                return {
                                    widthPixels: 0,
                                    heightPixels: 0
                                }
                            },
                        }
                    },
                    getPackageName: function () { },
                    getSystemService: function () {
                        return {
                            getDefaultDisplay: function () {
                                return {
                                    getRealMetrics: function () { },
                                }
                            },
                        }
                    },
                    getApplicationInfo: function () {
                        return {
                            nativeLibraryDir: null
                        }
                    },
                    getExternalFilesDir: function () {
                        return {
                            getAbsolutePath: function () { }
                        }
                    },
                },
                device: { sdkInt: 0 }
            }),
            // 打包至一个文件
            new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
            // 循环依赖检测
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                // `onStart` is called before the cycle detection starts
                onStart({ compilation }) {
                    console.log('start detecting webpack modules cycles');
                },
                // `onDetected` is called for each module that is cyclical
                onDetected({ module: webpackModuleRecord, paths, compilation }) {
                    // `paths` will be an Array of the relative module paths that make up the cycle
                    // `module` will be the module record generated by webpack that caused the cycle
                    compilation.errors.push(new Error(paths.join(' -> ')))
                },
                // `onEnd` is called before the cycle detection ends
                onEnd({ compilation }) {
                    console.log('end detecting webpack modules cycles');
                },
            }),
            ...(argv.mode === 'development' ? [new DevServer()] : [])
        ]
    }
}