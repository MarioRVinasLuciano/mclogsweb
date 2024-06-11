const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/client/tickets',
    createProxyMiddleware({
      target: 'https://api-connect.mclogs.com',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('origin', 'http://api-connect.mclogs.com');
      }
    })
  );
};
