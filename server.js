const Webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server')
const config = require('./config/')
const webpackConfig = require("./webpack.config")

webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");

var compiler = Webpack(webpackConfig)

var server = new WebpackDevServer(compiler, webpackConfig.devServer);

server.listen(3000, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('http://localhost:3000' + config.publicPath)
})