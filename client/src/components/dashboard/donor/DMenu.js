import "./DMenu.css";
import React from "react";
import { Route,Routes,Link} from 'react-router-dom';
import BloodDonor from "./BloodDonor";
import DonorHistory from "./DonorHistory";
import DonorApp from "./DonorApp";

function DMenu(){
    return(
        <div className="DMenu">
        <Link to = "/BloodDonor"> Donor Information</Link>
        <Link to = "/DonorHistory"> Donor History</Link>
        <Link to = "/DonorApp">Donor Appointments</Link>
        
        <Routes>
          <Route path = "/BloodDonor" element={<BloodDonor/>} />
          <Route path = "/DonorHistory" element={<DonorHistory/>} />
          <Route path = "/DonorApp" element={<DonorApp/>}/>
      </Routes>
    </div>
    );
}
export default DMenu;
