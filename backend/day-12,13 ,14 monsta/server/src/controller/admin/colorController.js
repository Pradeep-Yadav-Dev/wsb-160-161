const Colors = require("../../modal/colorModal")

const addColor=async(req,res)=>{
     try {

       
        let data=new Colors(req.body)
        await data.save()        
        res.status(200).json({ message: " Color Add Successfully ",data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}


const viewColor=async(req,res)=>{
     try {

       let data=await Colors.find()

        res.status(200).json({ message: " Color view Successfully ",data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}




module.exports={
    addColor,
    viewColor
}