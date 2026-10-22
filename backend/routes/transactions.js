const express = require('express');

function createTransactionRouter(transactions, customers, ObjectId) {
    const router = express.Router();

    // Retrieve all transactions
    router.get("/", async(req, res) => {
        try {
            const data = await transactions.find().toArray();
            res.json(data);
        } catch (error) {
            res.status(500).json({error: "Internal server error."});
        }
    });

    // Retrieve a transaction by its id
    router.get("/:id", async(req, res) => {
        try {
            if(!ObjectId.isValid(req.params.id)){
                return res.status(400).json({error: "Invalid transaction ID."});
            }
            const data = await transactions.findOne({_id : new ObjectId(req.params.id)});
            if(!data){
                return res.status(404).json({error: "No transaction found."});
            }
            res.json(data);
        } catch (error) {
            res.status(500).json({error: "Internal server error."});
        }
    });

    // Create a transaction
    router.post("/", async(req, res) => {
        try {
            const data = req.body;
            if(typeof data !== 'object' || !data || Array.isArray(data) || Object.keys(data).length === 0){
                return res.status(400).json({error: "Invalid request body."});
            }
    
            if(!ObjectId.isValid(data.customerId)){
                return res.status(400).json({error: "Invalid customer id."});
            }

            const customerId = new ObjectId(data.customerId);

            const customer = await customers.findOne({_id: customerId});
            if(!customer){
                return res.status(404).json({error: "Customer does not exists."});
            }

            const transactionType = Number(data.type);
            if(!Number.isFinite(transactionType) || (transactionType !== 1 && transactionType !== 2)){
                return res.status(400).json({error: "Invalid transaction type."});
            }
            const points = Number(data.points);
            if(!Number.isFinite(points) || points <= 0 || !Number.isInteger(points)){
                return res.status(400).json({error: "Invalid loyalty points. Loyalty points must be a positive integer."});
            }
            const result = await transactions.insertOne({
                customerId,
                type: transactionType,
                points
            });

            if(transactionType === 1){
                await customers.updateOne(
                    {_id: customerId},
                    {$inc: { points }}
                );
            }

            // TODO: Redemption points update

            res.status(201).json(result.insertedId); 
        } catch (error) {
            res.status(500).json({error: "Internal server error."});
        }        
    });

    return router;
};

module.exports = createTransactionRouter;