'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  PETS_URL: '"http://5c92dbfae7b1a00014078e61.mockapi.io/owners"'
  
})
