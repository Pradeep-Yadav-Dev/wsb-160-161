const express=require("express")
const { addMaterial, viewMaterial, deleteMaterial, editMaterial } = require("../../controller/adminContoller/materialController")
const app=express()
const multer  = require('multer')
const upload = multer()

const materilaRouter=express.Router()


materilaRouter.post("/add" ,upload.none(), addMaterial)
materilaRouter.get("/view" , viewMaterial)
materilaRouter.delete("/delete/:_id" , deleteMaterial)
materilaRouter.put("/update/:_id" , editMaterial)


module.exports=materilaRouter