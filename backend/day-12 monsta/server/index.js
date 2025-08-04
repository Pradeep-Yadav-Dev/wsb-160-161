const express=require("express")
const db = require("./src/config/dbConfig")
const app=express()
require("dotenv").config()

db()

app.listen(process.env.PORT ,()=>{
    console.log(`server run on ${process.env.PORT}`)
})

