const Materials = require("../../modal/materialModal")

const addMaterial = async (req, res) => {
    try {

        // console.log(req.body)
        // if (req.body.materialName == "") {
        //     res.status(400).json({ message: "please fill the material Name" })
        // }

        // if (req.body.order == "") {
        //     res.status(400).json({ message: "please fill the order" })
        // }

        //////////////////////////////////////////////////////////////////////////

        // if (req.body.order == "" || req.body.materialName == "") {
        //     res.status(400).json({ message: "please fill the All Feilds" })
        // }




        let data = new Materials(req.body)
        await data.save()
        res.status(200).json({ message: "material added !", data })
    }
    catch (error) {

        if (error.errors["materialName"]) {
            res.status(400).json({ message: error.errors["materialName"].message })
        }

        if (error.errors["order"]) {
            res.status(400).json({ message: error.errors["order"].message })
        }


        res.status(500).json({ message: "internal server error" })
    }
}


const viewMaterial = async (req, res) => {
    try {

        let searchValue = req.query.search || ""
        let page = req.query.page || 1
        let limit = req.query.limit || 10
        let skip = (page - 1) * limit



        let searchQuery = {}

        if (searchValue) {
            if (isNaN(searchValue)) {
                searchQuery.materialName = { $regex: searchValue, $options: "i" }

                // searchQuery = {
                //     $or: [
                //         { materialName: { $regex: searchValue, $options: "i" } },
                //         { order: Number(searchValue) }
                //     ]
                // }
            }
            else {
                searchQuery.order = Number(searchValue)
            }

        }



        let data = await Materials.find(searchQuery)
            .limit(limit)
            .skip(skip)

        let total = await Materials.find(searchQuery)
            .countDocuments()



        res.status(200).json({
            message: "material view ",
            data,
            total,
            totalPage: Math.ceil(total / limit),
            currentPage: page


        })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}


const statusUpdate = async (req, res) => {
    try {


        let data = await Materials.findById(req.params)
        let oldStatus = data.status

        await Materials.findByIdAndUpdate(req.params, { $set: { status: !oldStatus } })

        res.status(200).json({ message: "status update successfully" })
    }
    catch (error) {
        console.log(error)

        res.status(500).json({ message: "internal server error" })
    }
}

const singleDelete = async (req, res) => {
    try {

        await Materials.findByIdAndDelete(req.params)
        res.status(200).json({ message: "Data Delete Successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server error" })
    }
}


const multipalDelete = async (req, res) => {
    try {


        let ids = req.body

        if (ids.length == 0) return res.status(200).json({ message: " please Selected at least one" })


        await Materials.deleteMany({ _id: { $in: ids } })

        res.status(200).json({ message: " Selected Data Delete Successfully" })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}


const findData = async (req, res) => {
    try {

        let data = await Materials.findById(req.params)
        res.status(200).json({ message: " Data Found Successfully ", data })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}


const editMaterial = async (req, res) => {
    try {


        let data = await Materials.findByIdAndUpdate(req.params, { $set: req.body })
        res.status(200).json({ message: " Data Update Successfully " })
    }
    catch (error) {
        console.error(error)
        res.status(500).json({ message: "internal server error" })
    }
}



module.exports = {
    addMaterial,
    viewMaterial,
    statusUpdate,
    singleDelete,
    multipalDelete,
    findData,
    editMaterial
}