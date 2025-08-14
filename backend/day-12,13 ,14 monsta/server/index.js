const express=require("express")
const db = require("./src/config/dbConfig")
const { adminRouter } = require("./src/routes/app")
const app=express()
var cors = require('cors')
require("dotenv").config()

db()
app.use(cors())
app.use(express.json())

app.use("/admin",adminRouter)


app.listen(process.env.PORT ,()=>{
    console.log(`server run on ${process.env.PORT}`)
})

