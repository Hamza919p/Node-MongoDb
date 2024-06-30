const dbConnect = require("./MongoDb");

const update = async () => {
    const db = await dbConnect();
    const result = await db.updateOne({name:"Blueberry"}, { $set: {brand : "New brand"} });
    console.log(result);
}

update();