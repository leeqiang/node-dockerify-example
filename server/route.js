/**
 * 路由设定
 */
const router = require('koa-router')()

router.get('*', require('server/apis/all'))
module.exports = router
