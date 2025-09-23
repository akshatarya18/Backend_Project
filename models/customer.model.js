



const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema(
    {
        Name : {type: String,required: true},
        Mobile :{ type : String, required: true},
    },
    { timestamps: true}
);

module.exports = mongoose.model("Customer",customerSchema);