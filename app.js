require('app-module-path').addPath(__dirname)
const app = require('server/app')
const config = require('config')

app.listen(config.port, function () {
  console.log('You can visit: http://localhost:3000/hello')
  console.log('You can get swagger-json: http://localhost:3000/doc')
  console.log('You can visit version api: http://localhost:3000/version')
})
