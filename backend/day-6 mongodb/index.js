const express = require("express")
const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'jaipur';

let dbConfig = async () => {
    await client.connect()
    console.log('Connected successfully to server');
    return client.db(dbName);
}


app.get("/inser-data", async (req, res) => {
    let db=await dbConfig()
    let collection=await db.collection("city")

    await collection.insertOne({location:"mansrover"})
    res.send("data inserted....")
})

app.get("/view-data",async(req,res)=>{
        let db=await dbConfig()
        let collection=await db.collection("city")
        
        let data=await collection.find().toArray()
        res.send(data)
})

app.listen(process.env.PORT, () => {
    console.log(`server run on ${process.env.PORT}`)
})