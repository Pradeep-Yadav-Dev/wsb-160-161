const mongoose = require("mongoose")

const subSubCategorySchema = new mongoose.Schema({
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParentCategory"
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubCategory"
    },
    subSubCategoryImage:{
         type: String,
    },
    subSubCategoryName: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required:[true , "please fill the slug "],
        unique:true ,
        trim: true
    },
    order: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const SubSubCategory = mongoose.model("SubSubCategory", subSubCategorySchema)

module.exports = SubSubCategory
