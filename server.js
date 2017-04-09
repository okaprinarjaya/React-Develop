var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var path = require('path')
var webpackConfig = require('./webpack.config')

var app = express()
var compiler = webpack(webpackConfig)

app.use(express.static(path.join(__dirname, 'public')))

app.use(webpackDevMiddleware(compiler))

app.use(webpackHotMiddleware(compiler))

app.get('/hahaha', function (request, response) {
    response.json({message: "Yaayyyyyyyy! API"})
})

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = 8080

app.listen(PORT, function () {
    console.log('Production express server running at localhost: ' + PORT)
})
