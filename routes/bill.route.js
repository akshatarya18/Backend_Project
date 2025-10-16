

 const express = require('express');
const { deleteBill, createBill, getAllBills } = require('../controller/bill.controller');
const router = express.Router();
router.get("/getAllBills", getAllBills);
router.delete("/deleteBill", deleteBill);
router.post("/createBill",createBill);

module.exports =router;