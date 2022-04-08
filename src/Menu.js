import React from "react";
import"./index.css";
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import LanguageIcon from '@mui/icons-material/Language';
import EvStationIcon from '@mui/icons-material/EvStation';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
export function Menu() {
  
  const history =useHistory(); 
  return (
    <div className='menu'>
     <div className="u1">CLOSE<IconButton color="primary" aria-label="add to shopping cart" onClick={() => history.push("/")} > <CancelPresentationIcon /></IconButton> </div>
      <hr></hr>
      <MenuItem title='existing inventory' />
      <MenuItem title='used inventory' />
      <MenuItem title='trade-in' />
      <MenuItem title='cybertruck' />
      <MenuItem title='roadster' />
      <MenuItem title='semi' />
      
      <div className="bale">
     <span className="hy"><EvStationIcon/></span>  <MenuItem title='charging' />
       </div>
      <MenuItem title='powerwall' />
      <MenuItem title='commercial solar' />
      <MenuItem title='test drive' />
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
