const mongoose = require("mongoose")

const colorSchema = new mongoose.Schema({
    colorName: {
        type: String,
        required: [true, "please fill the color Name "]
    },
    colorCode: {
        type: String,
        required: [true, "please fill the color Name "]
    },
    order: {
        type: Number,
        required: [true, "please fill the order "]
    },
    status: {
        type: Boolean,
        default: true
    }

})

const Colors = mongoose.model("Colors", colorSchema)

module.exports = Colors