const express = require('express');
const app = express();
const PORT = 3000;
const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

const startServer = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("kita_loyalty");
        const transactions = db.collection("transactions");

        app.use(express.json());

        app.get("/", (req, res) => {
            res.send("Kita Loyalty is connected");
        });

        app.get("/api/transactions", async(req, res) => {
            try {
                const data = await transactions.find().toArray();
                res.json(data);
            } catch (error) {
                res.status(500).json({error: "Internal server error."});
            }
        });

        app.get("/api/transactions/:id", async(req, res) => {
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

        app.post("/api/transactions", async(req, res) => {
            try {
                const data = req.body;
                if(typeof data !== 'object' && Object.entries(data).length === 0){
                    return res.status(400).json({error: "Request body is required."});
                }
                if(!Number.isFinite(Number(data.customerId))){
                    return res.status(400).json({error: "Customer Id is required."});
                }
                if(!data.type){
                    return res.status(400).json({error: "Transaction type is required."});
                }
                if(!data.points){
                    return res.status(400).json({error: "Transaction points is required."});
                }
                const result = await transactions.insertOne(data);
                res.status(201).json(result.insertedId); 
            } catch (error) {
                res.status(500).json({error: "Internal server error."});
            }        
        });

        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT}`);
        });

    } catch (error) {
        console.log(error.message);
    }
};

startServer();