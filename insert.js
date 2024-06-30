const dbConnect = require("./MongoDb");

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({name: "Blueberry", brand : "Samsung"});
    if(result.acknowledged) {
        console.log("inserted");
    } else {
        console.log("failed");
    }
}

insert();