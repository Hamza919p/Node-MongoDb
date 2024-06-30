const express = require("express");
const dbConnect = require("./MongoDb");

const app = express();

app.use(express.json());    //if body is in json format

//Get Data from MongoDb
app.get('/', async (req, res) => {
    let db = await dbConnect();
    let data = await db.find().toArray();
    res.send(data);
});

//Post 
app.post('/', async (req, res) => {
    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    res.send(result);
});

app.listen(5004);
