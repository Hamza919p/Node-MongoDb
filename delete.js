const dbConnect = require("./MongoDb");

const update = async () => {
    const db = await dbConnect();
    const result = await db.deleteOne({name:"Blueberry"});
    console.log(result);
}

update();