import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import SignIn1 from './SignIn1';
import SignUp1 from './SignUp1';


// C:\smart blood\PatientInfo.js
function Reg1() {
  return (
    
        <div className="Reg1">
        <div><Link to="/SignIn1">SIGN IN</Link></div>
        <div><Link to="/SignUp1">SIGN UP</Link></div>
       
        <Routes>
        <Route path="/SignIn1" element={<SignIn1/>} exact />
        <Route path="/SignUp1" element={<SignUp1/>} exact />
        </Routes> 
        
      
    
    </div>
  );
}

export default Reg1;