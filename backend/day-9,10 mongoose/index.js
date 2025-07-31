const express = require("express")
const app = express()
const port = 3000
const mongoose = require('mongoose');
const multer = require('multer')
const upload = multer()

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/myntra')
    .then(() => {
        console.log("mongoose connection......👍")
    })
    .catch((error) => {
        console.log("error in mongoose connection", error)
    })

const userSchema = new mongoose.Schema({
    // userName:String,
    // userEmail:String,
    // userPassword:String

    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    

})

const UserModel = mongoose.model("Users", userSchema) //model=collection-name + schema


app.post("/insert", upload.none(), async (req, res) => {
    try {

        let response = new UserModel(req.body)
        await response.save()

        res.status(200).json({ message: "insert data", response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "inernal server error" })
    }
})


// view-api
app.get("/view", async (req, res) => {
    try {

        let filter = req.query ? req.query : "";

        let data = await UserModel.find(filter)
        let count = await UserModel.find(filter).countDocuments()

        if (count == 0) {
            res.status(200).json({ message: "No Record Found" })
        }
        res.status(200).json({ message: "view data", data, count })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "inernal server error" })
    }
})

app.delete("/delete/:_id", async (req, res) => {
    try {

        // console.log(req.params)
        let user = await UserModel.findById(req.params)

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        await UserModel.findByIdAndDelete(req.params)

        res.status(200).json({ message: "deleted.." })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "inernal server error" })
    }
})

app.put("/update/:_id", upload.none(),async(req,res)=>{
    try {

        // console.log(req.body)
        let user = await UserModel.findById(req.params)

        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }

        let response=await UserModel.findByIdAndUpdate( req.params ,{$set:req.body} )

        res.status(200).json({ message: "edited..",response })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "inernal server error" })
    }
})

app.listen(port, () => {
    console.log(`run on 3000`)
})