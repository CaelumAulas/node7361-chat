require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('FOI')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor de pé em http://localhost:${process.env.PORT}`)
  console.log('Pra derrubar o servidor: CRTL+c')
})

