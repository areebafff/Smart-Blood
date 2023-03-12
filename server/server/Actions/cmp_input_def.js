const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const db = require('./models')


app.connect(function(err) {
    if (err) throw err;
    con.query("SELECT Test_ID,Test_type,Test_name FROM blood_tests IN ", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

