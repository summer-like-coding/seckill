module.exports = {
    devServer: {
        proxy: {
          // 人员
            '/user': {
                target: 'http://121.5.166.154:9090',  // 后台接口域名
                ws: true,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
            }
        }
      }
}