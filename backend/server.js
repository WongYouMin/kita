const express = require('express');
const app = express();
const PORT = 3000;
const { MongoClient, ObjectId } = require('mongodb');
const transactionRouter = require('./routes/transactions');
const customerRouter = require('./routes/customers');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

const startServer = async() => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("kita_loyalty");
        const customers = db.collection("customers");
        const transactions = db.collection("transactions");

        // Parse incoming JSON request body into JavaScript values.
        app.use(express.json());

        // Register API routes.
        app.use("/api/customers", customerRouter(customers, ObjectId));
        app.use("/api/transactions", transactionRouter(transactions, customers, ObjectId));


        app.get("/", (req, res) => {
            res.send("Kita Loyalty is connected");
        });

        app.listen(PORT, () => {
            console.log(`Connected to port ${PORT}`);
        });

    } catch (error) {
        console.log(error.message);
    }
};

startServer();