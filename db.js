const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017/masterDB";
let db;
function connectToDB (cb) {
    MongoClient.connect(url)
    .then((client)=>{
    db = client.db();
    return cb();
    })
    .catch((error)=>{
        console.log(`error connecting to mongo ${error}`);
        return cb(error);
    });
}
function getDb(){
    return db;
}
module.exports = {connectToDB,getDb};