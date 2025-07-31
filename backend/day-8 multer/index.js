const express = require("express")
const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'iip';
const multer  = require('multer')
const path=require("path")

app.use("/upload", express.static(path.join(__dirname , "/upload")))


// db connection
let dbConfig = async () => {
    await client.connect();
    console.log('Connected successfully to server');
    return client.db(dbName);
}

//storage
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null , "upload")
    },
    filename:function(req,file,cb){

        const uniqueSuffix =Date.now()+ "-" + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

const filePath="http://localhost:5600/upload"

app.post("/insert",upload.single("image"), async(req,res)=>{
    
    let db=await dbConfig()
    let userCollection=await db.collection("user")

    console.log(req.file)

    await userCollection.insertOne({
        name:req.body.name,
        age:req.body.age,
        location:req.body.location,
        image:req.file.filename
    })

    res.status(200).send("inserted data")
})

app.get("/view" ,async(req,res)=>{
    
    let db=await dbConfig()
    let userCollection=await db.collection("user")

    let data=await userCollection.find().toArray()

    res.status(200).send({data,filePath})
})




app.listen(process.env.PORT, () => {
    console.log(`run on ${process.env.PORT}`)
})
