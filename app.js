require('dotenv').config()
const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

// https://mozilla.github.io/nunjucks/
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor de pé em http://localhost:${process.env.PORT}`)
  console.log('Pra derrubar o servidor: CRTL+c')
})

