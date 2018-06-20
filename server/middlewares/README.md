server/middlewares
==================

中间件服务, 一个中间件一个文件

譬如
- auth.js
- cors.js
- ...

样例, auth.js
```
const authMiddleware = function () {
  return function * (next) {
    // TODO
    yield next
  }
}

module.exports = authMiddleware
```
