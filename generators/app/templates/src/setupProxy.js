const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  console.log("app: " + app)
  app.use(proxy('/api', { 
      target: 'http://localhost:3000/', 
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api": "/api"
      },
    }
  ));
  app.use(proxy('/base', { 
      target: 'http://localhost:3000/', 
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/base": "/base"
      },
    }
  ));
};