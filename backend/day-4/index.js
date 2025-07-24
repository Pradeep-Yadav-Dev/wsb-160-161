const express = require("express")
const app = express()
const port = 5600
const fs=require("fs")
const path=require("path")


app.use(express.static("upload"))


// make folder
if(!fs.existsSync("upload")){
    fs.mkdirSync("upload")
}

// create html file

if(!fs.existsSync("upload/home.html")){
    fs.writeFileSync("upload/home.html","<b> home page </b>")
}
if(!fs.existsSync("upload/about.html")){
    fs.writeFileSync("upload/about.html","<b> about page </b>")
}
if(!fs.existsSync("upload/gallery.html")){
    fs.writeFileSync("upload/gallery.html","<b> gallery page </b>")
}
if(!fs.existsSync("upload/contact.html")){
    fs.writeFileSync("upload/contact.html","<b> contact page </b>")
}

// fs.unlinkSync("upload/home.html") //for delete





app.get("/", (req,res) => {
    // res.send("hello this is a home page")
   res.sendFile(path.join(__dirname , "upload" , "home.html"))
})
app.get("/about", (req,res) => {
   res.sendFile(path.join(__dirname , "upload" , "about.html"))
})
app.get("/gallery", (req,res) => {
    res.sendFile(path.join(__dirname , "upload" , "gallery.html"))
})
app.get("/contact", (req,res) => {
   res.sendFile(path.join(__dirname , "upload" , "contact.html"))
})




// catch all routes
app.use((req,res)=>{
    res.send("404")
})



app.listen(port, () => { console.log(`server run on ${port}`) })