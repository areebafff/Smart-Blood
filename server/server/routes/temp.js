const express = require('express');
const router = express.Router();
const {Doctors}=require("../models");


//result

//GET


// router.get('/',async (req,res)=>{
//     const Results = await Results.findAll();
//     res.json(listOfHospitals);
// });

//POST
router.post("/", async (req,res)=>{
    const post = req.body;
    await Doctors.create(post);
      res.json(post);
   })
 module.exports=router;