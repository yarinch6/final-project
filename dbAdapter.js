var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var whatToDoNext=function(err, mydb) {
    if (err) throw err;
    var dbo = mydb.db("SukenikHairDesign");
    var myobj = { name: "Shiraz", birthdate: "01/01/1997", phonenumber: "0509582721" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        mydb.close();
    });
    }

MongoClient.connect(url, whatToDoNext);