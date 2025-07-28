const express = require("express")
const app = express()
require('dotenv').config()
const fs=require("fs")

let checkToken = (req, res, next) => {
    let myToken = "ws@123"

    if (req.query.usertoken != myToken) {
        res.send("token invalid !!")
        return
    }
    next()

}

let getInfo=(req,res,next)=>{

    fs.appendFileSync("data.txt" , `Time is ${Date.now()} And Routes is ${req.url} And Method is ${req.method} \n ` )
    next()
}


app.use(getInfo) //applications md


// router level md
let adminRouter=express.Router()
let websiteRouter=express.Router()

app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/about",  (req, res) => {
    res.send("about page")
})

app.get("/gallery", (req, res) => {
    res.send("gallery page")
})

app.listen(process.env.PORT, () => {
    console.log(`run on ${process.env.PORT}`)
})


// checkToken,getInfo --> chain middleware
// [checkToken,getInfo] --> Aray middleware




