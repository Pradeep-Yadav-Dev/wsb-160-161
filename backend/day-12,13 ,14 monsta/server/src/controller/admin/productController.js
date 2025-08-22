const Colors = require("../../modal/colorModal")

const addProduct=async(req,res)=>{
    try{
        console.log(req.body)
        res.status(201).json({message:"Product added successfully"})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

const activeColor=async(req,res)=>{
    try{
        let data=await Colors.find({status:true})
        res.status(200).json({message:"Color activated successfully" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    addProduct,
    activeColor
}   