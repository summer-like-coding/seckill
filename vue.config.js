module.exports = {
  devServer: {
    proxy: {
      // 人员
      '/user': {
        target: 'http://121.5.166.154:9090',  // 后台接口域名
        ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
      },
      // 商品
      '/product': {
        target: 'http://47.96.38.160:7777',
        ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
      },
      '/order': {
        target: 'http://47.96.38.160:7777',
        ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
      },
      '/getPath': {
        target: 'http://47.96.38.160:8888',
        ws: true,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
      },

    },
    logLevel: 'debug'
  },
}