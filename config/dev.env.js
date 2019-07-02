'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PETS_URL: '"http://5c92dbfae7b1a00014078e61.mockapi.io/owners"'
})
