const express = require("express")
const { addProduct, activeColor, activeMaterial, activeParentCategory, activeSubCategory, activeSubSubCategory } = require("../../controller/admin/productController")
const upload = require("../../middleware/multer")


const productRouter = express.Router()


productRouter.post("/add",upload.fields(
    [
        {name:"productImage",maxCount:1},
        {name:"backImage",maxCount:1},
        {name:"galleryImage",maxCount:10}
    ]
), addProduct)   

productRouter.get("/active-color", activeColor)
productRouter.get("/active-material",activeMaterial)
productRouter.get("/active-parent-category",activeParentCategory)
productRouter.get("/active-sub-category/:_id",activeSubCategory)
productRouter.get("/active-sub-sub-category/:_id",activeSubSubCategory)


module.exports = productRouter

