const ParentCategory = require("../../modal/parentCategoryModal")
const filePath="http://localhost:5600/upload/parentCategory/"
const fs =require("fs")
const path=require("path")

const addParentCategory = async (req, res) => {
    try {
        
        let obj={
            categoryName:req.body.categoryName,
             order:req.body.order,
             parentCategoryImage:req.file.filename

        }
        let data=new ParentCategory(obj)
        await data.save()



        res.status(200).json({ message: " Category Add Successfully ",data ,filePath})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}


const viewParentCategory = async (req, res) => {
    try {
        
        let data=await ParentCategory.find()
        

        res.status(200).json({ message: " Category view Successfully ",data ,filePath})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

const singleDeleteParentCategory = async (req, res) => {
    try {
        

         await ParentCategory.findByIdAndDelete(req.params);
        
        res.status(200).json({ message: " Category delete Successfully "})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

module.exports={
    addParentCategory,
    viewParentCategory,
    singleDeleteParentCategory
}