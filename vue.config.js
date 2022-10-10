const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vue-meta'],
  chainWebpack: config => {
    config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => ({
          ...options,
          compilerOptions: {
            // treat any tag that starts with ion- as custom elements
            isCustomElement: tag => tag.startsWith('ion-')
          }
        }))






  }
})
