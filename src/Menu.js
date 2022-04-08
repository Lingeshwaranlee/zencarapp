import React from "react";
import"./index.css";
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
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
      <MenuItem title='charging' />
      <MenuItem title='powerwall' />
      <MenuItem title='commercial solar' />
      <MenuItem title='test drive' />
      <MenuItem title='find us' />
      <MenuItem title='support' />
      <MenuItem title='united states' />
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
