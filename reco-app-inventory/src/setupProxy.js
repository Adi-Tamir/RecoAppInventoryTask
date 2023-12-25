const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://578e-37-214-64-221.ngrok-free.app',
            changeOrigin: true,
        })
    );
};