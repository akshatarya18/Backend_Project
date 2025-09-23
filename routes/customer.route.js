
 const express = require('express');
const { deleteCustomer, updateCustomer, createCustomer, getCustomer, getCustomerById } = require('../controller/customer.controller');
const router = express.Router();
router.post("/createCustomer", createCustomer);
router.get("/getCustomer", getCustomer);
router.delete("/deleteCustomer", deleteCustomer);
router.put("/updateCustomer", updateCustomer);
router.get("/getCustomer",getCustomerById);

module.exports =router;

 