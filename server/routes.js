/**
 * Main application routes
 */

'use strict'

var errors = require('./components/errors')
var config = require('../config').backend
var path = require('path')

module.exports = function (app) {

  // Insert routes below  
  app.post('/api/sessions/create', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send('player');
    res.end();
  });
  
}
