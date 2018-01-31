require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')

// https://mozilla.github.io/nunjucks/
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  const port = process.env.PORT

  res.render('index.html', {port: port})
})

app.get('/coiso', (req, res) => {
  const msg = 'coisado'
  io.emit('nova-msg', {msg})

  res.send('oi')
})

app.post('/msg', (req, res) => {
  const msg = req.body.msg

  io.emit('nova-msg', {msg})

  res.send(msg)
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor de pé em http://localhost:${process.env.PORT}`)
  console.log('Pra derrubar o servidor: CRTL+c')
})

