const Koa = require('koa')
const app = new Koa()

app.use(function * () {
  this.body = { msg: 'hello world' }
})

app.listen(3000, function () {
  console.log('You can visit: http://localhost:3000/hello')
})
