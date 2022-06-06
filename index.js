const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/saveStudent', (req, res) => {
  res.send(req.query)
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


// async function mysave(details) {
//   await mydb.savePerson(details).then((result) => res.send(result));
// }
// mysave(newOrder);