const fs = require('fs')
const config = require('config')
const swaggerJSDoc = require('swagger-jsdoc')

const getFiles = function (dir, files_) {
  files_ = files_ || []
  let files = fs.readdirSync(dir)
  for (let i in files) {
    let name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_)
    } else {
      files_.push(name)
    }
  }
  return files_
}

const getSwaggerDoc = function * () {
  const options = {
    swaggerDefinition: {
      info: {
        title: 'Example',
        version: config.version
      },
      host: config.host.split('//')[1],
      basePath: '',
      contact: {
        email: 'qiang@teambition.com'
      },
      schemes: [
        'http', 'https'
      ]
    },
    apis: getFiles(__dirname)
  }
  this.body = swaggerJSDoc(options)
}

module.exports = getSwaggerDoc
