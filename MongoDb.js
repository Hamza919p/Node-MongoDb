const { MongoClient } = require("mongodb");
const url = "mongodb://localhost/27017";
const databaseName = "e-commerce";
const client = new MongoClient(url);

async function dbConnect() {
    let result = await client.connect();    //connect to mongodb url
    let db = result.db(databaseName);       //connect to specific database
    return db.collection('products');       //connect to specific collection
}

module.exports = dbConnect;