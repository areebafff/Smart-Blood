
import React from 'react';
//import axios from "axios";


  
function Info() {

  return (
    <div className="Guest"> 
      
        <div className='About'>
         <div className='title'>{"About"}</div>
         <div className='body'>
          <div>{"Smart Blood is a software aimed towards the"}</div>
          <div>{"the healthcare industry to help patients"}</div>
          <div>{" and donors under one application."}</div>
          {"  Patients will be able to evaluate their blood test reports and donors will have a platform that would allow them to complete donor related tasks."}</div>
        </div>
      

        <div className="Guest">
         <div className='title'>{"Contact Information"}</div>
         <div className='body'>
         <div>{"Skype: smartblood.org "}</div> 
          <div>{"WEB:www.smartblood.org"}</div>
          <div>{"Email:farhan@smartblood.org"}</div>
          </div>
        </div>

        <div className="Guest">
         <div className='title'>{"Hospitals"}</div>
         <div className='body'>
         <div>{"Hopital Universitaire Pitie Salpetrierein"}</div> 
          <div>{"The John Hopkins Hospital"}</div>
          <div>{"Toronto General University Health Network"}</div>
          <div>{"Cleveland Clinic"}</div>
          </div>
        </div>
        <div className="Guest">
         <div className='title'>{"Blood Banks"}</div>
         <div className='body'>
         <div>{"Husaini Blood Bank"}</div> 
          <div>{"Saylani Blood Bank"}</div>
          <div>{"Blood Bank LNH Karachi"}</div>
          </div>
        </div>
      
    </div>
  )
}


export default Info;
