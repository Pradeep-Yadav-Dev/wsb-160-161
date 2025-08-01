const express=require("express")
const materilaRouter = require("./adminRoutes/materialRoute")
const app=express()

const adminRouter=express.Router()
const websiteRouter=express.Router()
const appRouter=express.Router()


adminRouter.use("/material",materilaRouter)


module.exports={
    adminRouter,
    websiteRouter,
    appRouter
}