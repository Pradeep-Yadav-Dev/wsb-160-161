const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productImage: {
        type: String,
        required: true, 
    },
    backImage: {
        type: String,
        required: true, 
    },
    galleryImage: {
        type: [String],
        required: true, 
    },
     productName: {
        type: String,
        required: [true, "please fill the ..... "]
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ParentCategory"
    },
    subCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCategory"
    },
    subSubCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSubCategory"
    },
    material: {
        type: String,
        required: [true, "please fill the ..... "]
    },
    color: {
        type: String,
        required: [true, "please fill the ..... "]
    },
    productType:{
        type: String,
        enum:["featured","onsale","new arrivals"],
        required: [true, "please fill the product type"]

    },
    bestSelling:{
        type: Boolean,
        default: true
    },
    topRated:{
        type: Boolean,
        default: true
    },
    upSell:{
        type: Boolean,
        default: true
    },
    actualPrice: {
        type: Number,
        required: [true, "please fill the actual price"],
        min:[0 , "actual price must be positive"]
    },
    salePrice: {
        type: Number,
        required: [true, "please fill the sale price"],
        min:[0 , "sale price must be positive"]
    },
    stocked: {
        type: Number,
        required: [true, "please fill the stocked quantity"],
        min:[0 , "stocked quantity must be positive"]
    },
    order: {
        type: Number,
        required: [true, "please fill the order "]
    },
    slug:{
        type: String,
        required: [true, "please fill the slug"]
    },
    description: {
        type: String,
        required: [true, "please fill the description"]
    },
    status: {
        type: Boolean,
        default: true
    }

})

const Product = mongoose.model("Products", productSchema)

module.exports = Product