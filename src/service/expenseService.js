const Enumcollection = require('../enums/collections');
const {getDb} = require('../../db');
async function createExpense(payload) {
    try {
        let db=getDb();
        console.log("Inserting to mongo");
        await db.collection(Enumcollection.FINANCIALS).insertOne(payload);
        return "success";
    } catch(error){
        console.log(`Unable to insert into colleciton ${error}`);
    }
};
module.exports = {createExpense};
