const { defineConfig } = require('@vue/cli-service')

const isDev = process.env.NODE_ENV === 'development'

module.exports = defineConfig({
  publicPath: "/designnew/designtmp/",

  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devtool: 'source-map'
  },

  ...(isDev && {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://www.boatnames.com.au',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
          secure: false,
        }
      }
    }
  })
})
