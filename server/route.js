/**
 * 路由设定
 */
const router = require('koa-router')()

router.get('/doc', require('server/apis/doc'))
router.get('*', require('server/apis/all'))
module.exports = router
