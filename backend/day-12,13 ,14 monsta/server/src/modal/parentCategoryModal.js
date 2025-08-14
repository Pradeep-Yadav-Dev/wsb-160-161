const mongoose = require("mongoose")

const parentCategorySchema = new mongoose.Schema({
    parentCategoryImage: {
        type: String,
        
    },
    categoryName: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})

const ParentCategory=mongoose.model("ParentCategory",parentCategorySchema)


module.exports=ParentCategory