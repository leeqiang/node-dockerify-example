require('app-module-path').addPath(__dirname)
const app = require('server/app')
const config = require('config')

app.listen(config.port, function () {
  console.log('You can visit: http://localhost:3000/hello')
})
