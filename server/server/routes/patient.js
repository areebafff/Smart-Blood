const express = require('express');
const router = express.Router();
const {patients}=require("../models");



 //Patient

//GET


    router.get('/',async (req,res)=>{
       const listOfpatients = await patients.findAll();
       res.json(listOfpatients);
   });


//POST


  router.post("/", async (req,res)=>{
      const post = req.body;
      await patients.create(post);
      res.json(post);
  });


module.exports=router;