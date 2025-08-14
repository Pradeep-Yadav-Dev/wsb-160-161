const express=require("express")
const materialRouter = require("./admin/materialRoutes")
const colorRouter = require("./admin/colorRoutes")
const app=express()

const adminRouter=express.Router()

adminRouter.use("/material",materialRouter)
adminRouter.use("/color",colorRouter)




module.exports={
    adminRouter
}

// http://localhost:3000/admin/material/add