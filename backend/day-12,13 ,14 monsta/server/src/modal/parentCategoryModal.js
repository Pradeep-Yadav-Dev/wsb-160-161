const mongoose = require("mongoose")

const parentCategorySchema = new mongoose.Schema({
    parentCategoryImage: {
        type: String,

    },
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type:String,
        //  required: true,
        //  unique:true,
         trim:true
    },
    order: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const ParentCategory = mongoose.model("ParentCategory", parentCategorySchema)


module.exports = ParentCategory