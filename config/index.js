const autoConfig = require('./webpack.auto.config')
// const htmlConfig = require('./webpack.html.config')
const vueConfig = require('./webpack.vue.config')

module.exports = [
    autoConfig,
    vueConfig
]