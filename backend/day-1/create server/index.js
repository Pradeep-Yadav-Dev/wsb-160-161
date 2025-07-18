let http=require("http")
let PORT=5500

let server=http.createServer((req,res)=>{
        res.statusCode=200
        res.end("done.......")
})

server.listen(PORT , ()=>{
    console.log(`your server run on ${PORT}`)
})