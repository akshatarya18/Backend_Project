

 const express = require ("express");
const auth = require("../middleware/auth.middleware");
const { addProduct, getAllProduct, deleteProduct, updateProduct } = require("../controller/product.controller");
const router = express.Router();
router.post("/addProduct",addProduct);
router.get("/getAllProduct",getAllProduct);
router.delete("/deleteProduct",deleteProduct);
router.put("/updateProduct",updateProduct);
 
module.exports =router;