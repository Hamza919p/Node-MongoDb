const mySql = require("mysql");

const conn = mySql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
});

conn.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("connected");
    }
});