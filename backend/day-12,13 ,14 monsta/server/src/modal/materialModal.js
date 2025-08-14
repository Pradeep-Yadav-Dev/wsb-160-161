const mongoose=require("mongoose")

const materialSchema=new mongoose.Schema({
    materialName:{
        type:String,
        required:[true , "please fill the material Name "]
    },
    order:{
        type:Number,
        required:[true , "please fill the order "]
    },
    status:{
        type:Boolean,
        default:true
    }

})

const Materials=mongoose.model("Materials",materialSchema)

module.exports=Materials