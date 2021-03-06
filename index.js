const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

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
    product_Name:req.query.name,
    unit_Price:req.query.price,
    quantity:req.query.quantity,
    name:req.query.firstname,
    email:req.query.email,
    address:req.query.address,
    city:req.query.city,
    card_name:req.query.cardname,
    card_number:req.query.cardnumber,
    exp_month:req.query.expmonth,
    exp_year:req.query.expyear,
    cvv:req.query.cvv 
  }
  
  
  async function mysave1(orderDetails) {
    await mydb.saveOrder(orderDetails).then((result) => res.redirect('paymentPage.html'));
  }

  mysave1(newOrder);
})


app.get("/", function (req, res) {
  res.render("home");
});

// Showing secret page
// app.get("/secret", isLoggedIn, function (req, res) {
//   res.render("secret");
// });

// Showing register form
app.get("/register", function (req, res) {
  res.render("register");
});

// Handling user signup
app.post("/register", function (req, res) {
  var username = req.body.username
  var password = req.body.password
  User.register(new User({ username: username }),
          password, function (err, user) {
      if (err) {
          console.log(err);
          return res.render("register");
      }

      passport.authenticate("local")(
          req, res, function () {
          res.render("secret");
      });
  });
});

//Showing login form
app.get("/login", function (req, res) {
  res.render("login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}), function (req, res) {
});

//Handling user logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


