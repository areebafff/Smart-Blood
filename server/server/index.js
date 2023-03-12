const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const db = require('./models')
//import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

//routers
////for getting patient information
const patientRouter = require('./routes/patient');
app.use("/patient",patientRouter);

////for getting patient history
const PHRouter =require('./routes/patient_history')
app.use("/patient_history",PHRouter);

////for getting test report
const TRRouter =require('./routes/test_reports')
app.use("/test_reports",TRRouter);

////for getting test report
const RRouter =require('./routes/Results')
app.use("/Results",RRouter);

const TERouter =require('./routes/temp')
app.use("/temp",TERouter);

//router for donor

const postRouter = require('./routes/Blood_Donor');
app.use("/Blood_Donor",postRouter);

const postRouter2 = require('./routes/Blood_Bank');
app.use("/Blood_Bank",postRouter2);

const postRouter3 = require('./routes/Donor_Appointments');
app.use("/Donor_Appointments",postRouter3);

const postRouter4 = require('./routes/Donor_History');
app.use("/Donor_History",postRouter4);


db.sequelize.sync().then(() => {
 app.listen(3005, () => {
    console.log("Server running on port 3005");
 });
});


