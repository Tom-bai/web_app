var path = require('path')
module.exports = {
    devServer: {
      proxy: {
        '/api': {
            target: 'http://shop.xfengle.com/', //对应自己的接口
            changeOrigin: true,
            ws: false,
            pathRewrite: {
                '^/api': ''
            }
        }
      }
    },
    css: {
        loaderOptions: {
            stylus: {
                import: path.resolve(__dirname, '../web_app/src/assets/stylus/default.styl')
            },
        }
    }
}