const billModel = require("../models/bill.model");


const createBill = async(req,res)=> {
    try{
         console.log(req.body)     
                const {customer,products,discount,totalAmount} =req.body; 
                
                let existingCustomer = await Customer.findOne({mobile:customer.mobile});
                if(!existingCustomer) {
                    existingCustomer = await Customer.create(customer);
                }
                if (discount){
                    totalAmount = products.price -discount;
                }
                const newBill = await billModel.create({
                    customer: existingCustomer._id,
                    products,
                    discount,
                    totalAmount,
                });
                res.status(201).json({message:"Bill created successfully"});

    }catch(err){
        res.status(500).json({message: "Internal Server error"})
    }
};

const getAllBills = async (req,res)=>{
    try{
        const allbills = await billModel.find();
        res.status(200).json({message: "All bills", allbills});
    } catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
};

const deleteBill = async(req,res)=>{
    try{
        const{id } = req.query;
        const deleteBill = await billModel.findByIdAndDelete(id);
        res.status(200).json({message: "Successfully delete"})

    }catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
};


module.exports = {createBill,getAllBills,deleteBill

}