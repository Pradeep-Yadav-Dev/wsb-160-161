const mongoose=require("mongoose")

const materialSchema=new mongoose.Schema({
    materialName:{
        type:String,
        required:true
    },
    order:{
        type:Number,
        required:true

    }
})

const MaterialModal=new mongoose.modal("Materials",materialSchema)

module.exports=MaterialModal