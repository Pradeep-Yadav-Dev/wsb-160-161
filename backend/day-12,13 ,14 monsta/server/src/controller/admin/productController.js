const Colors = require("../../modal/colorModal")
const Materials = require("../../modal/materialModal")
const ParentCategory = require("../../modal/parentCategoryModal")
const SubCategory = require("../../modal/subCategoryModal")
const SubSubCategory = require("../../modal/subSubCategoryModal")

const addProduct=async(req,res)=>{
    try{
        
        let obj={...req.body}

       
        if(req.files.productImage){
            obj.productImage=req.files.productImage[0].filename
        }
        if(req.files.backImage){
            obj.backImage=req.files.backImage[0].filename
        }

        if(req.files.galleryImage){
            obj.galleryImage=req.files.galleryImage?.map((v)=>v.filename)
        }
        

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


const activeMaterial=async(req,res)=>{
    try{
        let data=await Materials.find({status:true})
        res.status(200).json({message:"Material activated successfully" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

const activeParentCategory=async(req,res)=>{
    try{
        let data=await ParentCategory.find({status:true}).select("categoryName")
        res.status(200).json({message:"Parent Category activated successfully" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

const activeSubCategory=async(req,res)=>{
    try{
       
        let data=await SubCategory.find({status:true , parentCategory :req.params })
        res.status(200).json({message:"Sub Category activated successfully" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

const activeSubSubCategory=async(req,res)=>{
    try{
       
        let data=await SubSubCategory.find({status:true , subCategory :req.params })
        res.status(200).json({message:"Sub Category activated successfully" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}






const activeSubSUbCategory=async(req,res)=>{
    try{
        let data=await SubSubCategory.find({status:true})
        res.status(200).json({message:"Color activated successfully" , data})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    addProduct,
    activeColor,
    activeMaterial,
    activeParentCategory,
    activeSubCategory,
    activeSubSubCategory
}   