const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/saveStudent', (req, res) => {
  res.send(req.query)
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})