const express=require("express")
const app=express()
const port=5600


app.get( "/",(req,res)=>{
    res.send("hello Home Page")
})

app.get("/about",(req,res)=>{
    res.send("hello about page")
})

app.get("/gallery",(req,res)=>{
    res.send("hello gallery page")
})

app.get("/contact",(req,res)=>{
    res.send("hello contact page")
})


// catch all routes
app.use((req,res)=>{
    res.send("404")
})

app.listen(port , ()=>{ console.log(`server run on ${port}`) } )