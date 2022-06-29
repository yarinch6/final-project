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

app.get('/getProduct', (req, res) => {
  async function myProduct() {
    await mydb.getProducts().then((result) => { res.send(result)});
  }
  myProduct();
})

app.get('/searchProduct', (req, res) => {
    
  async function mySearch() {
    await mydb.search().then((result) => res.send(result));
  }
  mySearch();
  
})

app.get('/getOrder', (req, res) => {
  var newOrder = {
    name:req.query.firstname,
    email:req.query.email,
    address:req.query.address,
    city:req.query.city 
  }

  async function mysave1(orderDetails) {
    await mydb.saveOrder(orderDetails).then((result) => res.send(result));
  }

  mysave1(newOrder);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


