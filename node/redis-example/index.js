const express = require("express");
const redis = require("redis");
const dotenv = require('dotenv')

const app = express();
dotenv.config();
const port = 3000;

const client = redis.createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => console.log("Redis Client Error", err));

async function connectRedis() {
  await client.connect();
  console.log("Connected to Redis!");
}

connectRedis(); 

app.get("/:id", async (req, res) => {
  try {
    let id = req.params.id; 
    console.log(`Requested ID: ${id}`);

    let cachedValue = await client.get(id); 

    if (cachedValue) {
      console.log("Cache hit");
      return res.send(`From Cache: ${cachedValue}`);
    } else {
      console.log("Cache miss, setting value");
      await client.set(id, "Cached"); 
      return res.send("Sending from DB (Simulated)");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
