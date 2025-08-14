const express = require("express")
const { addMaterial, viewMaterial, statusUpdate, singleDelete, multipalDelete, findData, editMaterial } = require("../../controller/admin/materialController")
const app = express()
const multer = require('multer')
const upload = multer()

const materialRouter = express.Router()


materialRouter.post("/add", upload.none(), addMaterial)                   //http://localhost:5600/admin/material/add
materialRouter.get("/view", viewMaterial)                               //http://localhost:5600/admin/material/view
materialRouter.put("/status-update/:_id", upload.none(), statusUpdate)   //http://localhost:5600/admin/material/status-update/:_id
materialRouter.delete("/single-delete/:_id", singleDelete)             //http://localhost:5600/admin/material/single-delete/:_id
materialRouter.post("/multipal-delete", upload.none(), multipalDelete)   //http://localhost:5600/admin/material/multipal-delete
materialRouter.get("/fetch/:_id",findData)
materialRouter.put("/update/:_id",upload.none(),editMaterial)


module.exports = materialRouter