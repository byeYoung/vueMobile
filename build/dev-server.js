require('./check-versions')()

var config = require('../config')
// 服务器开发者模式
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
// node 服务器框架 wxpress
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
// 根据不同的服务环境 获取webpack config  测试及生产使用webpack.prod.conf 开发模式使用webpack.dev.conf
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic 端口号
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false 是否自动打开浏览器
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware  http代理
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// devMiddleware hotMiddleware 是用来使用热重载的
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
};
// var proxyMiddleware = require('http-proxy-middleware')
// var server = express();
//
// server.middleware = [
//   proxyMiddleware(['/handler/ProjapprHandler!queryMainPageTotalDataFor4_0.action'], {target: 'https://www.phtfdata.com/pht', changeOrigin: true}),
//
// ];
//
// server.use(server.middleware);
