module.exports = {
    devServer: {
      proxy: {
        '/api': {
            target: 'http://www.xfengle.com', //对应自己的接口
            changeOrigin: true,
            ws: false,
            pathRewrite: {
                '^/api': ''
            }
        }
      }
    },
  }