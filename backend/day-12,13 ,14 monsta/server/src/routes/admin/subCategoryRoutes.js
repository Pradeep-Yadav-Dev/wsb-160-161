const express=require("express")
const { addParentCategory, viewParentCategory, singleDeleteParentCategory } = require("../../controller/admin/parentCategoryController")
const upload = require("../../middleware/multer")
const { addSubCategory, activeParentCategory, viewSubCategory } = require("../../controller/admin/subCategoryController")
const subCategoryRouter=express.Router()


subCategoryRouter.post("/add",upload.single("subCategoryImage")  ,addSubCategory)
subCategoryRouter.get("/active-parent-category",activeParentCategory)
subCategoryRouter.get("/view",viewSubCategory)


module.exports=subCategoryRouter