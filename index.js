const { MongoClient } = require("mongodb");
const url = "mongodb://localhost/27017";
const databaseName = "e-commerce";

const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();    //connect to mongodb url
    let db = result.db(databaseName);       //connect to specific database
    let collection = db.collection('products'); //connect to specific collection
    let products = await collection.find().toArray()      //finding all data in specific collection
    console.log(products);
}

getData();