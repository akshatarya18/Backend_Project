

 const express = require ("express");
const auth = require("../middleware/auth.middleware");
const { addProduct, getAllProduct, deleteProduct, updateProduct } = require("../controller/product.controller");
const router = express.Router();
router.post("/addProduct", auth, addProduct);
router.get("/getAllProduct", auth, getAllProduct);
router.delete("/deleteProduct", auth, deleteProduct);
router.put("/updateProduct", updateProduct);
 