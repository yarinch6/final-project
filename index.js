const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

const mydb = require("./models/dbAdapterConnect")

app.use(express.static('public'))


app.get('/getResult', (req, res) => {

  let fname = "Shiraz"

  async function myProgram(fname) {
    await mydb.findName(fname).then((result)=>res.send(result))
  }
  myProgram(fname)

})

app.get('/getCustomer', (req, res) => {
  var newCustomer = {
    name:req.query.fname,
    email:req.query.email,
    phoneNumber:req.query.phone 
  }

  async function mysave(customerDetails) {
    await mydb.saveCustomer(customerDetails).then((result) => res.send(result));
  }

  mysave(newCustomer);
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


