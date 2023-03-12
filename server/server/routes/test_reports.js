const express = require('express');
const router = express.Router();
const {Test_report}=require("../models");





  //GET

router.get('/',async (req,res)=>{
  const Test_report = await Test_report.findAll();
  res.json(listOfTest_report);
});


//POST
router.post("/", async (req,res)=>{
  const post = req.body;
  await Test_report.create(post);
    res.json(post);
 })




//test report
   router.post("/", async (req,res)=>{
   const post = req.body;
   await Test_report.create(post);
     res.json(post);
  })
module.exports=router;