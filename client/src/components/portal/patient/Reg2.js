import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';
import SignIn2 from './SignIn2';
import SignUp2 from './SignUp2'


// C:\smart blood\PatientInfo.js
function Reg2() {
  return (
    
        <div className="Reg2">
        <div><Link to="/SignIn2">SIGN IN</Link></div>
        <div><Link to="/SignUp2">SIGN UP</Link></div>
       
        <Routes>
        <Route path="/SignIn2" element={<SignIn2/>} exact />
        <Route path="/SignUp2" element={<SignUp2/>} exact />
        </Routes> 
        
      
    
    </div>
  );
}

export default Reg2;