const express = require('express');
const {connectToDB ,getDb} = require('./db');
const toPayRoute = require('./src/routes/toPay');
const createExpense =require('./src/routes/createExpense');
const app = express.Router();
const expressApp = express();
expressApp.use(express.json());

const PORT = 6000;
let db;
// db connection
connectToDB((err)=>{
    if(!err)
    {
        console.log("connected successfully");
        db = getDb();
        expressApp.listen(PORT,()=>{console.log('Connected to 3000')});

    }
})

expressApp.use("/",createExpense(app));