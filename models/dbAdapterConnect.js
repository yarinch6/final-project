const {MongoClient} = require("mongodb");
const cli = require("nodemon/lib/cli");

const uri = "mongodb://localhost:27017/";
const Client = new MongoClient(uri);

async function findMongoDoc (fname) {

    //connect
    await Client.connect();
    console.log("connect succes");

    //check
    await Client.db("admin").command({ping : 1 })

    //find one
    const myResult = await Client.db("SukenikHairDesign")
    .collection("customers")
    .findOne({name : `${fname}` });


    //close
    await Client.close();

    return myResult;

}

async function saveCustomer(customerDetails) {
    var Client = new MongoClient(uri);
    await Client.connect();
    var col = Client.db("SukenikHairDesign").collection("customers");
    var result = await col.insertOne(customerDetails);
    Client.close();
    return result;
}

async function getProducts() {
    await Client.connect();
    const db = Client.db("SukenikHairDesign");
    let collection = db.collection('products');
    let res = await collection.find({}).toArray();
    console.log(res);

    return res;
}

async function search() {  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("SukenikHairDesign");
    let collection = db.collection('products');
    let res = await collection.find({}).toArray();
   
    return res;
    
}

async function saveOrder(orderDetails) {
    var Client = new MongoClient(uri);
    await Client.connect();
    var col = Client.db("SukenikHairDesign").collection("customers");
    var result = await col.insertOne(orderDetails);
    Client.close();
    return result;
}

exports.findName = findMongoDoc;
exports.saveCustomer = saveCustomer;
exports.getProducts = getProducts;
exports.search = search;
exports.saveOrder = saveOrder