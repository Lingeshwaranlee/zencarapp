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
import Button from '@mui/material/Button';
import { Sign } from './Sign';

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
          <Route  path="/signup"><Sign/></Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home(){

   return(
   <div >
  
     <div className='kgf' >
        <img style={{ width:"1505px", height:"750px",objectFit:"cover"}} src= "https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD"></img>
        </div>
       

 

<div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://images.caricos.com/r/rolls-royce/2013_rolls-royce_ghost_otaon/images/1920x1080/2013_rolls-royce_ghost_otaon_11_1920x1080.jpg'></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>HERITAGE MEETS MODERNITY</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >Phantom effortlessly blends the classic with the strikingly modern. Dials that hark back to the Golden Age of Motoring are all digital, and yet are as striking to behold as any Rolls-Royce at any point in history.Rolls-Royce motor cars have been graced by the Spirit of Ecstasy mascot, one of the most recognisable emblems ever created. Yet, remarkably, given her immense fame and global reach, aspects of her story remain open to speculation, confusion and no little controversy.</h4></div>
  
</div>
<div className="op" style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"10px",marginTop:"10px"}}>
  <h1 >EXPERIENCE</h1>
  <h3 className="tes"style={{lineHeight:"30px"}} >As a world-class marque, there is more to meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://tesla-cdn.thron.com/delivery/public/image/tesla/5d01e919-478d-425b-8b6a-36f7cc1e4420/bvlatuR/std/3949x2202/Model-S-Exterior-Grid-A-Desktop-Mobile-Global'></img><h2 style={{textAlign:"center"}}>Relentless Performance.</h2><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore Offers</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}}  src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_464863480.component.damq2.3282591253392.jpg/WhatsApp%20Live%20Chat%20Mobile%20Banner.jpg'></img><h2 style={{textAlign:"center"}}>Help when you need it.</h2><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Chat Here</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://www.topgear.com/sites/default/files/cars-car/image/2021/03/lr_def_90_x_p400_gondwana_stone_gaydon_281020_005.jpg?w=1280&h=720'></img><h2 style={{textAlign:"center"}}> Connects you worldwide.</h2><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore Offers</Button></div>
  
</div>
<div className="op" style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"10px",marginTop:"10px"}}>
  <h1 >COMFORT</h1>
  <h3 className="tes"style={{lineHeight:"30px"}} >comfort access system that allows you to open the car door and start the engine without<br></br> having to touch the key. All you have to do is have the key somewhere on you (or near you.)</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_2_2022786683.component.damq2.3270483787190.jpg/Finance%20and%20Insurance%20Mobile%20Banner.jpg'></img><h2 style={{textAlign:"center"}}>Reimagine Instant Ownership.</h2><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",marginTop:"23x"}} variant="contained">Connects</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}}  src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_830192075.component.damq2.3270483735724.jpg/Mercedes%20me%20Mobile%20Banner.jpg'></img><h2 style={{textAlign:"center"}}>Experience what your Mercedes can really do - with Mercedes me.</h2><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore Offers</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_2_2135898001.component.damq2.3270483823938.jpg/Pre-Owned%20cars%20Mobile%20Banner.jpg'></img><h2 style={{textAlign:"center"}}>Find your dream car with Mercedes-Benz pre-owned cars.</h2><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Learn More</Button></div>
  
</div>
<img style={{ width:"1505px", height:"750px",objectFit:"cover"}} src='https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/page-properties/rrmc-black-badge-cullinan-hero-d.jpg/jcr:content/renditions/cq5dam.web.1920.webp'></img>
</div>

  );
}



