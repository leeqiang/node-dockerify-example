/**
 * 主应用入口
 */
const Koa = require('koa')
const app = new Koa()
const version = require('@tng/version')

// 跨域
app.use(require('koa-cors')({ credentials: true }))

// version 接口, apis/version.js(注释)
app.use(version.koa1())

// 路由
app.use(require('server/route').routes())
module.exports = app
