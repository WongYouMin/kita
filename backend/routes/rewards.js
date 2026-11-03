const express = require('express');

function createRewardRouter(rewards, ObjectId){
    const router = express.Router();

    // Retrieve all rewards
    router.get("/", async(req, res) => {
        try {
            const data = await rewards.find().toArray();
            res.json(data);
        } catch (error) {
            res.status(500).json({message: "Internal server error."});
        }
    });

    // Retrieve a reward by id
    router.get("/:id", async(req, res) => {
        try {
            if(!ObjectId.isValid(req.params.id)){
                return res.status(400).json({message: "Invalid reward ID."});
            }
            const rewardId = new ObjectId(req.params.id);
            const data = await rewards.findOne({
                _id: rewardId
            });
            res.json(data);
        } catch (error) {
            res.status(500).json({message: "Internal server error."});
        }
    });

    // Create a reward
    router.post("/", async(req, res) => {
        try {
            const data = req.body;
            if(typeof data !== 'object' || !data || Array.isArray(data) || Object.keys(data).length === 0){
                return res.status(400).json({message: "Invalid request body."});
            }
            if(!data.name.trim()){
                return res.status(400).json({message: "Reward name is required."});
            }
            const points = Number(data.points);
            if(!Number.isFinite(points) || !Number.isInteger(points) || points <= 0){
                return res.status(400).json({message: "Invalid reward points. A positive integer is required."})
            }
            const result = await rewards.insertOne({
                name: data.name.trim(),
                description: data.description.trim(),
                points
            });
            res.status(201).json(result.insertedId);
        } catch (error) {
            res.status(500).json({message: "Internal server error"});
        }
    });

    return router;
}

module.exports = createRewardRouter;
