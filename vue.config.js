const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    watchFiles: ['src/**/*'],
    proxy: {
      '/api': {
        target: 'http://3.36.239.162:80',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});
