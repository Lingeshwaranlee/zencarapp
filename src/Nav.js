import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputIcon from '@mui/icons-material/Input';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom';

 export default function Nav() {
  const history =useHistory(); 
  return (
    <AppBar position="static" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}>
      <Toolbar>
        <Button color="inherit" onClick={() => history.push("/")}><IconButton color="primary"   style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}} aria-label="add to shopping cart">< HomeIcon /></IconButton></Button>
        <Button color="inherit" onClick={() => history.push("/tesla")}>TESLA</Button>
        <Button color="inherit" onClick={() => history.push("/rolls")}>ROLLS-ROYCE</Button>
        <Button color="inherit" onClick={() => history.push("/bmw")}>BMW</Button>
        <Button color="inherit" onClick={() => history.push("/benz")}>BENZ</Button>
        <Button color="inherit" onClick={() => history.push("/jaguar")}>JAGUAR</Button>
        <Button color="inherit" onClick={() => history.push("/tata")}>TATA</Button>
        <Button color="inherit" onClick={() => history.push("/hyundai")}>HYUNDAI</Button>
        <Button color="inherit" onClick={() => history.push("/about")}><IconButton color="primary" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  aria-label="add to shopping cart"><InfoIcon /></IconButton></Button>
       
        <div className='hug'>
        
        <Button color="inherit" onClick={() => history.push("/login")}>LOGIN</Button>
        <IconButton color="primary" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  aria-label="add to shopping cart">< ManageAccountsIcon/></IconButton>
        <Button color="inherit" onClick={() => history.push("/menu")}>MENU</Button>
        </div>
      </Toolbar>
    </AppBar>

  );
}
