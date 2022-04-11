import './index.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import { Tesla } from './Tesla';
import { Bmw } from './Bmw';
import { Benz } from './Benz';
import { Tata } from './Tata';
import { Hyundai } from './Hyundai';
import { Jaguar } from './Jaguar';
import Nav from './Nav';
import { About } from './About';
import { RollRoyce } from './RollRoyce';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import AllInclusiveSharpIcon from '@mui/icons-material/AllInclusiveSharp';
import { Menu } from './Menu';
import { Login } from './Login';
import { Booking } from './Booking';

export default function App() {

  return (
    <div className="App">
      <Router>
      
          <Nav/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/tesla"><Tesla/></Route>
          <Route path="/rolls"><RollRoyce/></Route>
          <Route path="/bmw"><Bmw/></Route>
          <Route path="/benz"><Benz/></Route>
          <Route path="/jaguar"><Jaguar/></Route>
          <Route path="/tata"><Tata/></Route>
          <Route path="/hyundai"><Hyundai/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/menu"><Menu/></Route>
          <Route  path="/login"><Login/></Route>
          <Route  path="/book"><Booking/></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

function Home(){

   return(
   <div className='pic'>
     
        <div className='gh'>
          <h1>DRIVE IT LIKE YOUR<br/> LAST DAY!</h1>
        </div>
 <div className='you'>
 <h2>All rights reserved © 2020</h2>
<h3 >< FacebookIcon /><TwitterIcon/><InstagramIcon/></h3>
 
        </div>

 
   </div>

  
  );
}



