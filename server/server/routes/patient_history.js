const express = require('express');
const router = express.Router();
const { patient_history } = require('../models');


  //PM_History
    router.get('/',async (req,res)=>{
       const listOfpatient_history = await patient_history.findAll();
       res.json(listOfpatient_history);
    });


    // Patient
  router.post("/", async (req,res)=>{
      const post = req.body;
      await patient_history.create(post);
      res.json(post);
  });
    module.exports=router;

