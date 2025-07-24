const http=require("http")
const port=5800
const fs=require("fs")
const { json } = require("stream/consumers")


if(fs.existsSync("public")){
    console.log("public folter already exist")
}
else{
    fs.mkdirSync("public")
}

if(fs.existsSync("pradeep.txt")){
    console.log("pradeep.txt folter already exist")
}
else{
    fs.writeFileSync("pradeep.txt" , " Hello ws students ")
}


if(fs.existsSync("home.html")){
    console.log("home.html already exist")
}
else{
    fs.writeFileSync("home.html" , "<b> hello home page </b>" )
}

fs.unlinkSync("home.html")


let data={name:"ws",age:55}
if(fs.existsSync("about.js")){
    console.log("about.js already exist")
}
else{
    fs.writeFileSync("about.js" ,JSON.stringify(data)  )
}






let server=http.createServer((req,res)=>{
   if(req.url=="/"){
        res.end("this is home page")
   }
   else if(req.url=="/about"){
        res.end("this is a about page")
   }
   else if(req.url=="/gallery"){
        res.end("this is a gallery page")
   }
   else if(req.url=="/contact"){
        res.end("this is a contact page")
   }
   else{
    res.end("this is a 404 page")
   }
})




server.listen(port, ()=>{
    console.log(`server run on ${port} `)
})