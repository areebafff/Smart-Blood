const express = require('express');
const router = express.Router();
const {Blood_Bank} = require('../models');

router.get("/", async (req,res) => {
    const Bloobankdetails = await Blood_Bank.findAll();
    res.json(Bloobankdetails);
});

router.post("/", async (req,res) => {
    const bloodbank = req.body;
    await Blood_Bank.create(bloodbank);
    res.json(bloodbank);
}); 
module.exports = router;