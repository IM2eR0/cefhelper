const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: "./",
      nodeIntegration: true
    }
  }
})
