

const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        productName : {type: String,required: true},
        price :{ type : Number, required: true},
        stock :{ type: Number},
        barcode: { type: String}
    },
    { timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);