

const { response } = require("express");
const customerModel = require("../models/customer.model");

const createCustomer = async(req,res)=>{
    try{
        console.log(req.body)     

        const {Name,Mobile} =req.body;  
        const customer = await customerModel.create({Name,Mobile});
        res.status(500).json({message:"Customer created successfully", customer});
    } catch(err){
        res.status(500).json({message: err.message})
    }
};

const getCustomer = async(req,res)=>{
    try{
        const customer = await customerModel.find();
   res.status(200).json({message :"Customer fetched Successfully",customer})   
  }catch(err){
    res.status(500).json({message: err.message})
    }
};

const updateCustomer = async(req,res)=>{
    try{
        const{id}= req.query;
    const {Name,Mobile} =req.body;
    const updateCustomer= await customerModel.findByIdAndUpdate(id,{Name,Mobile});
    res.status(200).json({message :"Customer updated Successfully",updateCustomer}) 
  }catch(err){
    res.status(500).json({message: err.message})
    }
};

const deleteCustomer = async(req,res)=>{
    try{
        const{id}= req.query;
        const deleteCustomer= await customerModel.findByIdAndDelete(id);
    res.status(200).json({message :"Custromer deleted Successfully",deleteCustomer}) 
  }catch(err){
     res.status(500).json({message: err.message})
    }
};

const getCustomerById = async(req,res)=>{
    try{
   const id  = req.query
   const getCustomer = customerModel.findOne({id})
   if(!getCustomer) {
   res.status(404).json({message :"Customer not found"})}
   res.status(200).json({message :"Customer found Successfully",getCustomer}) 

    }catch(err){
    res.status(500).json({message: err.message})
    }
}

module.exports = { 
    createCustomer,getCustomer,updateCustomer,deleteCustomer,getCustomerById
};