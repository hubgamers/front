module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:8080/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
