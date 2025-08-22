const ParentCategory = require("../../modal/parentCategoryModal")
const SubCategory = require("../../modal/subCategoryModal")
const filePath="http://localhost:5600/upload/subCategory/"
const slugify = require('slugify')


const addSubCategory = async (req, res) => {
    try {
        // slug: slugify(req.body.parentCategory,"-",req.body.subCategoryName +"-"+ req.body.slug ,{ replacement: '-', trim: true ,lower: true, } ) ,

        let obj = {
            parentCategory: req.body.parentCategory,
            subCategoryName: req.body.subCategoryName,
            slug:slugify(req.body.slug ,{ replacement: '-', trim: true ,lower: true, }),
            order: req.body.order,
            subCategoryImage: req.file.filename

        }
        let data = new SubCategory(obj)
        await data.save()

        res.status(200).json({ message: " Category Add Successfully ", data })
    }
    catch (error) {
        console.error(error)
        // if (error.code == 11000) {

        //    res.status(409).json({message: error.message})
        // }
        res.status(500).json({ message: "internal server error" })
    }
}


const activeParentCategory = async (req, res) => {
    try {
        let data = await ParentCategory.find({ status: true })
            .select("categoryName _id")
        res.status(200).json({ message: " Category Fatech Successfully ", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

const viewSubCategory = async (req, res) => {
    try {
        let data =await SubCategory.find()
        .populate({
            path:"parentCategory",
            select:"categoryName"
        })

        res.status(200).json({ message: " Category Fatech Successfully ", data ,filePath})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

module.exports = {
    addSubCategory,
    activeParentCategory,
    viewSubCategory
}