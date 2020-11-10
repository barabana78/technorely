const express = require('express')
const config = require('config')
const path = require('path')
const bodyParser = require('body-parser')
const zlib = require('zlib')
const tar = require('tar')

const app = express()
app.use(bodyParser.json())
app.use('/', express.static(path.join(__dirname, 'img')))

const imgFolderPath = path.join(__dirname, 'img')
const gzs = zlib.Gzip()

app.get('/', (_, res) => {
  sendFile(tar.create({ gzip: true }, [imgFolderPath]).pipe(gzs), res)
})

function sendFile(readFileStream, responseStream) {
  responseStream.writeHead(200, {
    'Content-Encoding': 'gzip',
    'Content-Type': 'application/gzip',
  })

  readFileStream.pipe(responseStream)

  //обрабатываем ошибку
  readFileStream.on('error', error => {
    responseStream.statusCode = 500
    responseStream.end('Server Error')
    console.error(error)
  })
  //когда закончился res закрываем файл
  readFileStream.on('close', () => {
    readFileStream.destroy()
  })
}

const PORT = config.get('port') || 3000
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
