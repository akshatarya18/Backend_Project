





const mongoose = require("mongoose")

const billSchema = new mongoose.Schema({
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Customer",
        required : true,
    },
    products:{
        product:{ type:mongoose.Schema.Types.ObjectId,ref:"Product"},
        quantity:{ type: Number,required:true},
        price:{ type: Number,required:true},
    },
    discount: { type: Number, default:0},
    totalAmount:{type: Number, required:true},
},
  
    { timestamps: true}
);

module.exports = mongoose.model("Bill",billSchema); 