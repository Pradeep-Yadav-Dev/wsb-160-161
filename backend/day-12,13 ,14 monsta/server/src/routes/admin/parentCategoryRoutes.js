const express=require("express")
const { addParentCategory, viewParentCategory, singleDeleteParentCategory } = require("../../controller/admin/parentCategoryController")
const upload = require("../../middleware/multer")
const parentCategoryRouter=express.Router()


parentCategoryRouter.post("/add",upload.single("parentCategoryImage")  ,addParentCategory)
parentCategoryRouter.get("/view",viewParentCategory)
parentCategoryRouter.delete("/single-delete/:_id",singleDeleteParentCategory)


module.exports=parentCategoryRouter