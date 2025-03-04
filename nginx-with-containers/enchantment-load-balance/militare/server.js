const express = require('express')
const app = express()
const port = 3000

app.get('/shoot', (req, res) => {
  res.send(`I want peace! I'm ${process.env.ID}`)
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
