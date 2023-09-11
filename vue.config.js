const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.glb$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/models/[name].[hash:7].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
})
