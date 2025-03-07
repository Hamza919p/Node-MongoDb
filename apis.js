const express = require("express");
const dbConnect = require("./MongoDb");
const mongoDb = require("mongodb");   //to delete object with id

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

//Put to update
app.put('/', async (req, res) => {
    let db = await dbConnect();
    let result = await db.updateOne(
        {name: req.body.name},
        {$set: req.body}
    )
    res.send(result);
});


//Delete
app.delete('/:id', async (req, res) => {
    const db = await dbConnect();
    const result = await db.deleteOne(
        {_id: mongoDb.ObjectId(req.params.id)},
    )
    console.log(result);
});

app.listen(5004);
