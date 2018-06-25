const Koa = require('koa')
const app = new Koa()
const CLIENT_ID = process.env.CLIENT_ID || 'a'
const CLIENT_SECRET = process.env.CLIENT_SECRET || 'b'
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'
const API_URL = process.env.API_URL || 'https://www.baidu.com'
app.use(function * () {
  this.body = { msg: 'hello world' }
})

app.listen(3000, function () {
  console.log('You can visit: http://localhost:3000/hello');
  console.log('my id is', CLIENT_ID);
  console.log('my secret is', CLIENT_SECRET);
  console.log('my mongo_url is', MONGO_URL);
  console.log('my api_url is ',API_URL);

})
