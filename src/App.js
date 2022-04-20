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
   <div >
  
     <div className='kgf' >
        <img style={{ width:"1505px", height:"750px",objectFit:"cover"}} src= "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/coachbuild/page-properties/rolls-royce-pagename-hero-d.jpg/jcr:content/renditions/original"></img>
        </div>
       

 

<div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://images.caricos.com/r/rolls-royce/2013_rolls-royce_ghost_otaon/images/1920x1080/2013_rolls-royce_ghost_otaon_11_1920x1080.jpg'></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>HERITAGE MEETS MODERNITY</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >Phantom effortlessly blends the classic with the strikingly modern. Dials that hark back to the Golden Age of Motoring are all digital, and yet are as striking to behold as any Rolls-Royce at any point in history.Rolls-Royce motor cars have been graced by the Spirit of Ecstasy mascot, one of the most recognisable emblems ever created. Yet, remarkably, given her immense fame and global reach, aspects of her story remain open to speculation, confusion and no little controversy.</h4></div>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px"}} src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_1458819270.component.damq2.3283870811362.jpg/Final%20EQC%20Homepage%20Banner%20Mobile.jpg'></img><h2 style={{textAlign:"center"}}>It's more than electric. It's a Mercedes.</h2></div>
  <div><img style={{width:"400px"}}  src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_464863480.component.damq2.3282591253392.jpg/WhatsApp%20Live%20Chat%20Mobile%20Banner.jpg'></img><h2 style={{textAlign:"center"}}>Help when you need it.</h2></div>
  <div><img style={{width:"400px"}} src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_205597732.component.damq2.3292450215455.jpg/GLC%20banner_Mobile_1534x1151%20pixels-01.jpg'></img><h2 style={{textAlign:"center"}}>Takes you to the most beautiful places  Connects you worldwide.</h2></div>
  
</div>
<img style={{ width:"1505px", height:"750px",objectFit:"cover"}} src='https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/page-properties/rrmc-black-badge-cullinan-hero-d.jpg/jcr:content/renditions/cq5dam.web.1920.webp'></img>
</div>

  );
}



