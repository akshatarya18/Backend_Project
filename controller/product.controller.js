const productModel = require("../models/product.model");


const addProduct = async(req,res)=>{
    try{
        const {productName,price,stock} =req.body;

        //const barcode = generateBarcode()

        const product = await productModel.create({productName,price,stock});
        res.status(500).json({message:"Product added successfully", product});
    } catch(err){
        res.status(500).json({message: err.message})
    }
};

const getAllProduct = async(req,res)=>{
    try{
        const products = await productModel.find();
        res.status(200).json({message: "Sucessfull",products});
    } catch(err){
        res.status(500).json({message: err.message})
    }
};

const updateProduct = async(req,res)=>{
    try{
        const { id} = req.query
        const {productName,price,stock} =req.body;
        const products = await productModel.findByIdAndUpdate(id ,{
            productName,
            price,
            stock,
        });

        res.status(200).json({message: "Product Updated successfully", products});
    } catch(err){
        res.status(500).json({ message: err.message});
    }
};

const deleteProduct = async(req,res)=>{
    try{
        const{id}= req.query;
        const deleteProduct = await productModel.findByIdAndDelete(id);
        res.status(200).json({message: "Product deleted succesfully", deleteProduct});
    } catch(err){
        res.status(500).json({message: err.message})
    }
};

module.exports ={ addProduct,getAllProduct,updateProduct,deleteProduct};
