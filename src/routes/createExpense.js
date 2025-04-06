const {createExpense} = require('../service/expenseService');
module.exports = function (app){
    const fileTag = 'createExpense.js';
    const createExpenseHandler = async (req,res) => {
        try {
            const payload = req.body;
            const result = await createExpense(payload);
            return res.status(201).json({message:result});
        }
        catch(error) {
            console.log(`${fileTag} Error occured while creating expense ${error}`);
            return res.status(500).json({message:`${fileTag} Error occured while creating expense ${error}`});
        }
    }
    app.post('/create-expense',createExpenseHandler);
    return app;
}