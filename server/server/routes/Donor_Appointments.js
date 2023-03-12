const express = require('express');
const router = express.Router();
const {Donor_Appointments} = require('../models');

router.get("/", async (req,res) => {
    const donorappointmentdetails = await Donor_Appointments.findAll();
    res.json(donorappointmentdetails);
});

router.post("/", async (req,res) => {
    const donorappoint = req.body;
    await Donor_Appointments.create(donorappoint);
    res.json(donorappoint);
}); 
module.exports = router;