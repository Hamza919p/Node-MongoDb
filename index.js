const dbConnect = require('./MongoDb');

async function main() {
    let connection = await dbConnect();
    let data = await connection.find().toArray();
    console.log(data);
}

main();