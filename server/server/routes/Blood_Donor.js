const express = require('express');
const router = express.Router();
const {Blood_Donor} = require('../models');

router.get("/", async (req,res) => {
    const Bloodonordetails = await Blood_Donor.findAll();
    res.json(Bloodonordetails);
});

router.post("/", async (req,res) => {
    const bloodonor = req.body;
    await Blood_Donor.create(bloodonor);
    res.json(bloodonor);
}); 
module.exports = router;