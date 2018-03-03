'use strict'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var express = require('express')
var cors = require('cors');
var config = require('../config').backend

// Setup server
var app = express()
var server = require('http').createServer(app)
require('./config/express')(app)
require('./routes')(app)
app.use(cors)

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
})

// Expose app
exports = module.exports = app