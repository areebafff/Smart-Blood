const express = require('express');
const router = express.Router();
const {Results}=require("../models");


//result

//GET


router.get('/',async (req,res)=>{
    const Results = await Results.findAll();
    res.json(listOfResults);
});

//POST
router.post("/", async (req,res)=>{
    const post = req.body;
    await Results.create(post);
      res.json(post);
   })
 module.exports=router;