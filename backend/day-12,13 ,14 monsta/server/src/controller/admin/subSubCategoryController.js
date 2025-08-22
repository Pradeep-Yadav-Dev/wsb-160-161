// SubSubCategory Modal
const slugify = require('slugify')
const filePath="http://localhost:5600/upload/subSubCategory/"

const ParentCategory = require("../../modal/parentCategoryModal")
const SubCategory = require("../../modal/subCategoryModal")
const SubSubCategory = require('../../modal/subSubCategoryModal')

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

const activeSubCategory = async (req, res) => {
    try {

        let data = await SubCategory.find({ status: true, parentCategory: req.params })

        res.status(200).json({ message: "Sub Category Fatech Successfully ", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

const addSubSubCategory = async (req, res) => {
    try {
        let obj = {
            parentCategory: req.body.parentCategory,
            subCategory: req.body.subCategory,
            subSubCategoryName: req.body.subSubCategoryName,
            slug: slugify(req.body.slug, { replacement: '-', trim: true, lower: true, }),
            order: req.body.order,
            subSubCategoryImage: req.file.filename

        }

        let data = new SubSubCategory(obj)
        await data.save()

        res.status(200).json({ message: "Sub Category Add Successfully " })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}

const viewSubSubCategory = async (req, res) => {
    try {

        let data =await SubSubCategory.find()
         .populate({
            path:"parentCategory",
            select:"categoryName"
        })
         .populate({
            path:"subCategory",
            select:"subCategoryName"
        })

        res.status(200).json({ message: "Sub Category view Successfully " , data ,filePath})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}


module.exports = {
    activeParentCategory,
    activeSubCategory,
    addSubSubCategory,
    viewSubSubCategory
}