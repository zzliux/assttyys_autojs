const autoConfig = require('./webpack.auto.config')
const vueConfig = require('./webpack.vue.config')

module.exports = [
    vueConfig,
    autoConfig
]