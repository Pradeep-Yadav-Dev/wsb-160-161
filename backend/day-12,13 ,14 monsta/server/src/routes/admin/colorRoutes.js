const express = require("express")


const multer = require('multer')
const { addColor, viewColor } = require("../../controller/admin/colorController")
const upload = multer()

const colorRouter = express.Router()


colorRouter.post("/add", upload.none(), addColor)                   //http://localhost:5600/admin/color/add
colorRouter.get("/view", viewColor)                               //http://localhost:5600/admin/color/view



module.exports = colorRouter

