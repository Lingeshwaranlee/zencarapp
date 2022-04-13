import React from "react";
import"./index.css";
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LanguageIcon from '@mui/icons-material/Language';
import EvStationIcon from '@mui/icons-material/EvStation';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import InventoryIcon from '@mui/icons-material/Inventory';
export function Menu() {
  
  const history =useHistory(); 
  return (
    <div className='menu'>
     <div className="u1">CLOSE<IconButton color="primary" aria-label="add to shopping cart" onClick={() => history.push("/")} > <CancelPresentationIcon /></IconButton> </div>
      <hr></hr>
     
      
      
      <div className="bale">
     <span className="hy"><InventoryIcon/></span>  <MenuItem title='existing inventory' />
       </div>
    
  
      <div className="bale">
     <span className="hy"><AddRoadIcon/></span> <MenuItem title='roadster' />
       </div>
      <div className="bale">
     <span className="hy"><LocalShippingIcon/></span> <MenuItem title='semi' />
       </div>
      <div className="bale">
     <span className="hy">< BoltIcon/></span> <MenuItem title='powerwall' />
       </div>
      <div className="bale">
     <span className="hy">< SolarPowerIcon/></span> <MenuItem title='commercial solar' />
       </div>
      <div className="bale">
     <span className="hy">< DriveEtaIcon/></span> <MenuItem title='test drive' />
       </div>
      <div className="bale">
     <span className="hy"><EvStationIcon/></span>  <MenuItem title='charging' />
       </div>
      <div className="bale">
     <span className="hy"><PersonSearchIcon/></span> <MenuItem title='find us' />
       </div>
       <div className="bale">
     <span className="hy"><ContactSupportIcon/></span> <MenuItem title='support' />
       </div>
      <div className="bale">
     <span className="hy"><LanguageIcon/></span>  <MenuItem title='united states' />
       </div>
    </div>
  );
}
function MenuItem({title}){
  return(
    <div className='menuitem'>
<h4 className="oii">{title}</h4>
    </div>
  )
}
