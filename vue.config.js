const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "/designnew/",
  transpileDependencies: [
    'vuetify'
  ]
})
