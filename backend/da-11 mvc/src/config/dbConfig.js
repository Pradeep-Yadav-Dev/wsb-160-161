const mongoose = require('mongoose');

let db=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/mvc')
    try{
        console.log("db connection 👍")
    }
    catch(error){
        console.log("db connection error",error)
    }
}

module.exports=db