const express = require('express');

function createCustomerRouter(customers, ObjectId){
    const router = express.Router();

    // Retrieve all customers
    router.get("/", async(req, res) => {
       try {
            const data = await customers.find().toArray();
            res.json(data);
       } catch (error) {
            res.status(500).json({error : "Internal server error."});
       }
    });

    // Retrieve a customer by id
    router.get("/:id", async(req, res) => {
        try {
            if(!ObjectId.isValid(req.params.id)){
                return res.status(400).json({error: "Invalid customer ID."});
            }
            const id = new ObjectId(req.params.id);
            const data = await customers.findOne({_id : id});
            if(!data){
                return res.status(404).json({error: "No customer found."});
            }
            res.json(data);
        } catch (error) {
            res.status(500).json({error: "Internal server error."});
        }
    });

    // Create a customer
    router.post("/", async(req, res) => {
        try {
            const data = req.body;
            if(typeof data !== 'object' || !data || Array.isArray(data) || Object.keys(data).length === 0){
                return res.status(400).json({error: "Invalid request body."});
            }

            if(typeof data.name !== 'string' || !data.name.trim()){
                return res.status(400).json({error: "Invalid customer name."});
            }

            const result = await customers.insertOne({
                name: data.name.trim(),
                points: 0
            });

            res.status(201).json(result.insertedId);
            
        } catch (error) {
            res.status(500).json({error: "Internal server error"});
        }
    });

    return router;
}


module.exports = createCustomerRouter;