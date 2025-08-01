
const addMaterial=async(req,res)=>{
    try{
        console.log(req.body)
        res.send(200).json({message:" material data added "})
    }
    catch(error){
        console.log(error)
        res.send(500).json({message:" internal server error"})
    }
}

const viewMaterial=async(req,res)=>{
    try{
        console.log(req.body)
        res.send(200).json({message:" material data added "})
    }
    catch(error){
        console.log(error)
        res.send(500).json({message:" internal server error"})
    }
}


const deleteMaterial=async(req,res)=>{
    try{
        console.log(req.body)
        res.send(200).json({message:" material data added "})
    }
    catch(error){
        console.log(error)
        res.send(500).json({message:" internal server error"})
    }
}


const editMaterial=async(req,res)=>{
    try{
        console.log(req.body)
        res.send(200).json({message:" material data added "})
    }
    catch(error){
        console.log(error)
        res.send(500).json({message:" internal server error"})
    }
}

module.exports={
    addMaterial,
    viewMaterial,
    deleteMaterial,
    editMaterial
}


