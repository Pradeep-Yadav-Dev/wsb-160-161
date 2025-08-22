const express=require("express")

const upload = require("../../middleware/multer")
const { activeParentCategory, activeSubCategory, addSubSubCategory, viewSubSubCategory } = require("../../controller/admin/subSubCategoryController")

const subSubCategoryRouter=express.Router()




subSubCategoryRouter.get("/active-parent-category",activeParentCategory) 

subSubCategoryRouter.get("/active-sub-category/:_id",activeSubCategory)

subSubCategoryRouter.post("/add", upload.single("subSubCategoryImage"), addSubSubCategory)
subSubCategoryRouter.get("/view",viewSubSubCategory)





module.exports=subSubCategoryRouter