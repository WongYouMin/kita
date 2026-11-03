const express = require('express');

function createTransactionRouter(transactions, customers, rewards, ObjectId) {
    const router = express.Router();

    // Retrieve all transactions
    router.get("/", async(req, res) => {
        try {
            const data = await transactions.aggregate([
                {
                    $lookup: {
                        from: "customers",
                        localField: "customerId",
                        foreignField: "_id",
                        as: "customerDetails"
                    }
                },
                {
                    $sort: {
                        createdAt: -1
                    }
                }
            ]).toArray();
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
           
            if(transactionType === 1){
                const points = Number(data.points);
                if(!Number.isFinite(points) || points <= 0 || !Number.isInteger(points)){
                    return res.status(400).json({error: "Invalid loyalty points. Loyalty points must be a positive integer."});
                }
                // TODO: Handle if customer points is updated but transactions is not
                const customerResult = await customers.updateOne(
                    {_id: customerId},
                    {$inc: { points }}
                );

               if(customerResult.matchedCount !== 1){
                    return res.status(400).json({message: "Failed to update customer points balance."}); 
               }

                const result = await transactions.insertOne({
                    customerId,
                    type: transactionType,
                    points,
                    createdAt: new Date()
                });

                res.status(201).json(result.insertedId); 
            } else if(transactionType === 2){
                if(!ObjectId.isValid(data.rewardId)){
                    return res.status(400).json({message : "Invalid reward id."});
                }

                const rewardId = new ObjectId(data.rewardId);
                const rewardData = await rewards.findOne({_id: rewardId});
                if(!rewardData){
                    return res.status(400).json({message: "Reward does not exists."});
                }

                const rewardPoints = Number(rewardData.points);
                if(!Number.isFinite(rewardPoints) || !Number.isInteger(rewardPoints) || rewardPoints <= 0){
                    return res.status(400).json({message: "Invalid reward points."});
                }

                const customerPoints = Number(customer.points);
                if(!Number.isFinite(customerPoints) || !Number.isInteger(customerPoints) || customerPoints < 0){
                    return res.status(400).json({message: "Invalid customer points."});
                }
                if(customerPoints < rewardPoints){
                    return res.status(400).json({message: "Insufficient points balance."});
                }

                // TODO: Handle if customer points is updated but transactions is not
                const customerResult = await customers.updateOne(
                    {
                        _id: customerId,
                        points: {$gte: rewardPoints}
                    },
                    {$inc: {points: -rewardPoints}}
                );

                if(customerResult.matchedCount !== 1){
                    return res.status(400).json({message: "Failed to update customer points balance."}); 
               }

                const result = await transactions.insertOne({
                    customerId,
                    rewardId,
                    type: transactionType,
                    points: rewardPoints,
                    createdAt: new Date()
                });

                res.status(201).json(result.insertedId); 
            }
            
        } catch (error) {
            res.status(500).json({error: "Internal server error."});
        }        
    });

    return router;
};

module.exports = createTransactionRouter;