const app = require('./app')
const debug = require('debug')('app:config')
const config = Object.assign({}, app)

debug(config)
module.exports = config
