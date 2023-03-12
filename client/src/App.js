
import './App.css';
import React from 'react'
import {Route, Link, Routes} from 'react-router-dom';
import Info from "./components/portal/guest/Info";
import Menu from "./components/Menu/Menu";

import Reg2 from "./components/portal/patient/Reg2";
import SignIn2 from './components/portal/patient/SignIn2';
import SignUp2 from './components/portal/patient/SignUp2';
import PatientInfo from "./components/dashboard/patient/PatientInfo";
import Pmenu from "./components/Menu/Pmenu";
import PatientHistory from './components/dashboard/patient/PatientHistory';
import TestReports from './components/dashboard/patient/TestReports';


import BloodDonor from "./components/dashboard/donor/BloodDonor";
import DonorHistory from "./components/dashboard/donor/DonorHistory";
import DonorApp from "./components/dashboard/donor/DonorApp";
import DMenu from "./components/dashboard/donor/DMenu";
import SignIn1 from './components/portal/donor/SignIn1.js'; 
import SignUp1 from './components/portal/donor/SignUp1';
import Reg1 from "./components/portal/donor/Reg1";





function App(){
  return  (
    <div className="App"> 
        <div className='navbar'>
          
        <Link to="/Info"> GUEST </Link>
        <Link to="/Reg1"> DONOR </Link>
        <Link to="/Reg2"> PATIENT</Link> 
        <Link to="/Pmenu">PATIENT DASHBOARD</Link>
        <Link to="/Dmenu/">DONOR DASHBOARD</Link>

        </div>
        
        
        <Routes>
        <Route path="/" element={<Menu/>} exact />
        <Route path="*" element={<p>Path not resolved</p>} />


        <Route path="/Info" element={<Info/>} exact />
        <Route path="/Reg2" element={<Reg2/>} exact />
        <Route path="/SignIn2" element={<SignIn2/>} exact />
        <Route path ="/SignUp2" element = {<SignUp2/>} exact />
        <Route path="/Pmenu" element={<Pmenu/>} exact />
        <Route path="/PatientInfo" element={<PatientInfo/>} exact />
        <Route path="/PatientHistory" element={<PatientHistory/>} exact />
        <Route path="/TestReports" element={<TestReports/>} exact />


        <Route path = "/BloodDonor" element={<BloodDonor/>} />
        <Route path = "/DonorHistory" element={<DonorHistory/>} />
        <Route path = "/DonorApp" element={<DonorApp/>}/>
        <Route path = "/SignUp1" element = {<SignUp1/>} exact />
        
        <Route path="/SignIn1" element={<SignIn1/>} exact /> 
        <Route path="/Reg1" element={<Reg1/>} exact />
        <Route path = "/DMenu/*" element={<DMenu/>} exact/>
        
        </Routes>
      
    
    </div>
    );
  }

export default App;
//<Route path="/PatientInfo" element={<PatientInfo/>} exact />
//<Link to="/PatientInfo">Personal Information</Link>