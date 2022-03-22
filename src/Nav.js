import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

 export default function Nav() {
  const history =useHistory(); 
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => history.push("/")}>HOME</Button>
        <Button color="inherit" onClick={() => history.push("/tesla")}>TESLA</Button>
        <Button color="inherit" onClick={() => history.push("/rolls")}>ROLLS-ROYCE</Button>
        <Button color="inherit" onClick={() => history.push("/bmw")}>BMW</Button>
        <Button color="inherit" onClick={() => history.push("/benz")}>BENZ</Button>
        <Button color="inherit" onClick={() => history.push("/jaguar")}>JAGUAR</Button>
        <Button color="inherit" onClick={() => history.push("/tata")}>TATA</Button>
        <Button color="inherit" onClick={() => history.push("/hyundai")}>HYUNDAI</Button>
        <Button color="inherit" onClick={() => history.push("/about")}>ABOUT</Button>
      </Toolbar>
    </AppBar>

  );
}
