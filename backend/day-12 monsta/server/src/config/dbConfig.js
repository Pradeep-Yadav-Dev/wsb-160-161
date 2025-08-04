const mongoose=require("mongoose")
require("dotenv").config()

let {USERNAMES , USERPASSWORD , CLUSER ,DBNAME}=process.env


let db=()=>{
    mongoose.connect(`mongodb+srv://${USERNAMES}:${USERPASSWORD}@cluster0.zpootat.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(()=>{
        console.log("Db connection 👍")
    })
    .catch((error)=>{
        console.log("Db connection error",error)
    })

}

module.exports=db