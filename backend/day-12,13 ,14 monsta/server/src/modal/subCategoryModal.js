const mongoose = require("mongoose")

const subCategorySchema = new mongoose.Schema({
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ParentCategory"
    },
    subCategoryImage: {
        type: String
    },
    subCategoryName: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required:[true , "please fill the slug "],
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

const SubCategory = mongoose.model("SubCategory", subCategorySchema)

module.exports = SubCategory
