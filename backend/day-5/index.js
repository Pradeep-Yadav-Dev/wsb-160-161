
const express=require("express")
const app=express()
const port=3300
const multer  = require('multer')
const upload = multer()

app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send("done.... home page")
})
app.get("/about",(req,res)=>{
    res.send({message:"this routes work properly...."})
})

app.post("/ws",(req,res)=>{
    res.send("ws page....")
})

app.get("/gallery/:id",(req,res)=>{
    console.log(req.params.id) //for params
    res.send("done gallery....")
})

app.get("/contact" , (req,res)=>{
    console.log(req.query.number)
    res.send("contact....")
})

app.post("/register",  upload.none() ,(req,res)=>{

    console.log(req.body)
    res.send("registered.....")
})



app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})