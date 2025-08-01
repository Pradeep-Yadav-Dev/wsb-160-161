const express=require("express")
const db = require("./src/config/dbConfig")
const { adminRouter, websiteRouter, appRouter } = require("./src/routes/app")
const app=express()
require('dotenv').config()

db()

app.use(express.json())

app.use("/admin",adminRouter)
app.use(websiteRouter)
app.use(appRouter)

app.listen(process.env.PORT ,()=>{
    console.log(`run on ${process.env.PORT}`)
})
