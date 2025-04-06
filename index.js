const express = require('express');
const {connectToDB ,getDb} = require('./db');
const app = express();
app.use(express.json());
const PORT = 6000;
let db;
connectToDB((err)=>{
    if(!err)
    {
        console.log("connected successfully");
        db = getDb();
        app.listen(PORT,()=>{console.log('Connected to 3000')});

    }
})
app.get("/",async (req,res)=>{
    let products = await db.collection('products').find({}).toArray();
    console.log(products);
    res.status(200).json({status:"success"});
});