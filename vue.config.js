const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? './static' : './',
    outputDir: './dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/styles/variables";',
            },
        },
    },
    transpileDependencies: ['vuetify'],
    devServer: { historyApiFallback: true },
})
