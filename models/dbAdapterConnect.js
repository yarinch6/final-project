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

exports.findName = findMongoDoc;
exports.saveCustomer = saveCustomer;
