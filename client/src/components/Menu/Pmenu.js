import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import PatientInfo from "../dashboard/patient/PatientInfo";
import PatientHistory from '../dashboard/patient/PatientHistory';
import TestReports from '../dashboard/patient/TestReports';
// 
// C:\smart blood\PatientInfo.js
function Pmenu() {
  return (
    
        <div className="Pmenu">
        <div><Link to="/PatientInfo">PERSONAL INFORMATION</Link></div>
        <div><Link to="/PatientHistory">HISTORY</Link></div>
        <div><Link to="/TestReports">TEST REPORT</Link></div>
        <Routes>
        <Route path="/PatientInfo" element={<PatientInfo/>} exact />
        <Route path="/PatientHistory" element={<PatientHistory/>} exact />
        <Route path="/Test_reports" element={<TestReports/>} exact />
        </Routes> 
        
      
    
    </div>
  );
}

export default Pmenu;


