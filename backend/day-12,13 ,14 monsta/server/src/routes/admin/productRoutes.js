const express = require("express")
const { addProduct, activeColor } = require("../../controller/admin/productController")
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


module.exports = productRouter

