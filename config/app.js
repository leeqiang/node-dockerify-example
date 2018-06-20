const pkg = require('../package.json')

/**
 * @param {String} name 应用名称
 * @param {String|Number} port 应用端口
 * @param {String} host 应用地址
 */
const app = {
  name: 'example',
  port: process.env.NODE_ENV || 3000,
  host: `http://localhost:${process.env.NODE_ENV || 3000}`,
  version: pkg.version
}

module.exports = app
