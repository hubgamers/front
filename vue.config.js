module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8080/api',
        target: 'https://api-hubgamers.alexisbriet.fr/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
