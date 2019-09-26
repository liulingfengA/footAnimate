module.exports = {
  publicPath: './',
  devServer: {    
    proxy: {
      '/api': {
        target: 'http://154.211.159.144',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
