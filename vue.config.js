module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://spring-boot-app:8080/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
