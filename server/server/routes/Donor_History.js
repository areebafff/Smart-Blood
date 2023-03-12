const express = require('express');
const router = express.Router();
const {Donor_History} = require('../models');

router.get("/", async (req,res) => {
    const donorhistorydetails = await Donor_History.findAll();
    res.json(donorhistorydetails);
});

router.post("/", async (req,res) => {
    const donorhistory = req.body;
    await Donor_History.create(donorhistory);
    res.json(donorhistory);
}); 
module.exports = router;