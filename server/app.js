/**
 * 主应用入口
 */
const Koa = require('koa')
const app = new Koa()

app.use(require('server/route').routes())
module.exports = app
