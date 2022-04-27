import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee, faGaugeSimpleHigh} from "@fortawesome/free-solid-svg-icons";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState,useEffect } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Header4 } from './Header4';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useHistory } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Jaguar() {
  const cars= [
    {
      "id": "139",
      "name": "JAGUAR F-Pace",
      "poster": "https://cdni.autocarindia.com/ExtraImages/20210621055521_Jaguar_F_PACE_SVR.jpg",
      "varients":["Base= 82-Lakhs","Middle= 2.2-crores","Top= 4.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "DIESEL/PETROL",
      "price": "82 Lakhs",
      "speed": "210 kmph",
      "mileage": " 19.3 kmpl",
      "seat": "5"
    },
    {
      "id": "140",
      "name": "JAGUAR  I-PACE",
      "poster": "https://cdn.motor1.com/images/mgl/ArYx6/s1/2019-jaguar-i-pace.jpg",
      "varients":["Base=1.12 Crore","Middle= 2.2-crores","Top= 4.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "ELECTRIC",
      
      "speed": "200 kmph",
      "mileage": "470 km(single-charge)",
      "seat": "5"
    },{
      "id": "143",
      "name": "The Land Rover Defender",
      "poster": "https://www.wallpaperup.com/uploads/wallpapers/2019/11/20/1356577/6db17eba071afc884f4c1039c05e39a6-700.jpg",
      "varients":["Base=2.61 crore","Middle= 4-crores","Top= 8.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
      "price": "2.61 crore",
      "speed": "250 kmph",
      "mileage": "(10.9 to 15.3 Km/l)",
      "seat": "2"
    },
    
    {
      "id": "142",
      "name": "JAGUAR XE",
      "poster": "https://car-images.bauersecure.com/pagefiles/86604/xe_100.jpg",
      "varients":["Base=48.50  Lakhs","Middle= 1.2-crores","Top= 3.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
     "speed": "250 kmph",
      "mileage": "(13.5 to 13.6 kmpl.)",
      "seat": "5"
    },
  
    {
      "id": "143",
      "name": "JAGUAR F-TYPE",
      "poster": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/10_ftype_refresh_0.jpg?itok=cHufxa6g",
      "varients":["Base=2.61 crore","Middle= 4-crores","Top= 8.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
      "price": "2.61 crore",
      "speed": "250 kmph",
      "mileage": "(10.9 to 15.3 Km/l)",
      "seat": "2"
    },
    {
      "id": "141",
      "name": "JAGUAR  XF",
      "poster": "https://di-uploads-pod6.dealerinspire.com/jaguardarien/uploads/2018/06/2019-jaguar-f-type-coupe-f-type-r-in-yulong-white-with-silver-weave-carbon-fiber-packages.jpg",
      "varients":["Base=76 Lakhs","Middle= 1.2-crores","Top= 3.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "DIESEL/PETROL",
      "speed": "235 kmph",
      "mileage": " (13.1 to 19.3 Km/l)",
      "seat": "5"
    },
  ];
  const[east,seteast]=useState(false);
  return (
    <div>
     <div className='header4'>
  <div className='header__logo1'>
  
           
  </div>
  </div>

<Header4/>
      
      <h1 className="brand">JAGUAR-SERIES <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div style={{marginTop:"50px"}}>
    <div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://blogmedia.dealerfire.com/wp-content/uploads/sites/380/2021/04/2021-Jaguar-XF-steering-wheel-and-center-console_o.jpg'></img></div>
  <div style={{ background: "black" ,color:" white",paddingTop:"50px",paddingLeft:"100px", height:"440px"}}>
  <h1 style={{color:"crimson"}}> TECHNOLOGY</h1>
  <h4 className="test"style={{lineHeight:"30px",color:"white"}} >With Jaguar’s infotainment system, you’re seamlessly connected to the rest of the world.All the power and agility of a true thoroughbred. With state-of-the art driving systems making an unforgettable experience.F‑TYPE is Jaguar design in its most athletic form — lean, and elegant from any angle.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px",color:"white"}}><ArrowForwardIcon/></IconButton><span style={{color:"crimson"}}>Technology</span> </h2></h4></div>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"150px"}}><img style={{width:"600px",height:"400px",objectFit:"cover"}} src='https://gaadiwaadi.com/wp-content/uploads/2020/10/Land-Rover-Defender-Country-pack-1018x720.jpg'></img><h2 style={{textAlign:"center"}}></h2></div>
  <div><img style={{width:"600px",height:"400px",objectFit:"cover"}}  src='https://s.yimg.com/uu/api/res/1.2/nK2aPDnfbGc78qyCM_Ag8A--~B/Zmk9ZmlsbDtoPTQ4Mjt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/a4af8220-f73e-11ea-bdf7-78c80d79efb3.cf.jpg'></img><h2 style={{textAlign:"center"}}></h2></div>
  
  
</div>
<div className="op" style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"10px",marginTop:"10px"}}>
  <h1 >EXPERIENCE</h1>
  <h3 className="tes"style={{lineHeight:"30px"}} >As a world-class marque, there is more to Jaguar than meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://cdn.carbuzz.com/gallery-images/2020-jaguar-xf-sedan-carbuzz-345330.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}>It's more than electric. It's a JAGUAR.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore offers</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}}  src='https://wallpapercave.com/wp/wp6014820.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}>Defender xs 90's edition.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">defence</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://images.caricos.com/l/land_rover/2020_land_rover_defender_90/images/2560x1440/2020_land_rover_defender_90_86_2560x1440.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}>Eye Catching Dashboard .</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">learn about</Button></div>
  
</div>
<img className="ishu1"  src="https://wallpapercave.com/wp/wp6014820.jpg"></img>
<div className='hover1'>
  
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px", height:"440px"}}>
     <h1 style={{color:"crimson"}}>THE NEW RANGE ROVER</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >Is Land Rover coming out with a new Range Rover? THE NEW RANGE ROVER – 50 YEARS IN THE MAKING The fifth-generation Range Rover makes its debut for 2022 in standard – or long-wheelbase form in SE, Autobiography, or First Edition trim. The new Range Rover is a combination of breathtaking modern designs, peerless refinement, and unmatched capability.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton><span style={{color:"crimson"}}> Range Rover</span></h2></h4></div>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://cdn.motor1.com/images/mgl/rPeMX/s1/range-rover-evoque-autobiography-2021-in-grau-dreiviertelansicht-von-schrag-vorne.jpg'></img></div>
</div>
<div className='hover2'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://s3-prod-europe.autonews.com/s3fs-public/ANE_160919894_AR_-1_PNGCZPZMNHNW.jpg'></img></div>
  <div style={{ background: "white" ,color:" balck",paddingTop:"50px",paddingLeft:"100px", height:"440px"}}>
     <h1 style={{color:"crimson"}}>PERFORMANCE </h1>
  <h4 className="test" style={{lineHeight:"30px",color:"black"}}>All the power and agility of a true thoroughbred. With state-of-the art driving systems making an unforgettable experience.F‑TYPE is Jaguar design in its most athletic form — lean, and elegant from any angle.Enjoy greater efficiencies along with Jaguar performance. As well as a range of efficient petrol engines, XF features a diesel range that is enhanced by mild hybrid technology; a smart regenerative system that charges during deceleration and braking.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton><span style={{color:"crimson"}}> Performance</span></h2></h4></div>
  
</div>
</div>
    <div className="joy">
    <h1>About Jaguar:</h1>
          <h2 className="tes1">Jaguar’s mission is to accelerate the world’s transition to sustainable energy.</h2>
          <h3 className="tes">Jaguar Cars was the company that was responsible for the production of
             Jaguar cars until its operations were fully merged with those of Land Rover 
             to form Jaguar Land Rover on 1 January 2013.Jaguar is the luxury vehicle
              brand of Jaguar Land Rover, a British multinational car manufacturer with 
              its headquarters in Whitley, Coventry, England.</h3>
        </div>
        <div className="folks">
        <Button variant="contained"  onClick={()=>seteast(!east)}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",maxWidth: '180px', maxHeight: '80px', minWidth: '180px', minHeight: '80px',fontSize:"19px",borderRadius:"12px"}} >PREVIEW-<RemoveRedEyeIcon/></Button>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/bO08STHIhgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
        <img style={{ width:"1505px", height:"750px",objectFit:"cover"}} src="https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/40c263fc-b4c2-4a59-a6fe-d3c361b26c19/Jaguar%20F-Pace%20(6).jpeg"></img>
      </div>
 
  );
}

function CarData({name,poster,varients,color,type,speed,mileage,seat}) {
  const history =useHistory(); 
  const ji={textAlign:'center'}
  const[show ,setshow]=useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 580,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height:650,
  };
  
  return (
    <div  className='tesla'>
      <div>
       <img src={poster} alt={"profile"}  className='tesla-poster'></img>
      <h2 className='styles'>{name}
      <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      style={{ color:"rgb(41, 39, 39)"}}
      onClick={()=>setshow(!show)}
      >
  <ExpandCircleDownIcon />
</IconButton>

      
      </h2>
      </div>
      {show?  <div className="customize">
      <Button onClick={handleOpen} style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",margin:"10px",paddingLeft:"10px",paddingRight:"10px"}}>Specs <IconButton 
      
      color="primary" 
      aria-label="add to shopping cart"
      style={{ color:"rgb(185, 183, 183)"}}
      >
     <DashboardCustomizeIcon />
</IconButton>
</Button> 
</div> :""}
       
       
       <div className='flex'>
       

       {show?  <div className='tamil'>
     <h2>varients:</h2>
       <select className='yaal'  >
         {varients.map(varients=>{
           return <option>{varients}</option>
         })}
       </select>
       </div>  :""}
       {show?  <div className='zee'>
      <h2>color:</h2> 
      <select className='yaal'>
         {color.map(color=>{
           return <option value={color}>{color}</option>
         })}
       </select> 
       </div>  :""}
     </div>
      
      
     {show?   <Button variant="contained" className='bt' onClick={() => history.push("/book")} style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}><AddShoppingCartIcon/>ADD TO CART</Button> :""}
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <div>
    <h2 className='head'>{name}
    <span className="poo">
    <IconButton 
      
      color="primary" 
      aria-label="add to shopping cart"
      onClick={handleClose}
      >
     <CancelPresentationIcon />
</IconButton>
</span>
</h2>
    <img className='tesla-poster-modal'src={poster}></img>
    <hr></hr>
    <div className="neo">
    <h3><FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>: {type}</h3> 
    <h3><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon>: {speed}</h3>
    <h3><FontAwesomeIcon icon={faGaugeSimpleHigh}></FontAwesomeIcon>:{mileage}</h3>
    <h3><AirlineSeatReclineExtraIcon/>:{seat}</h3>
    <h3> RATINGS<RatingSize/></h3>
    </div>
    <div className="abd">
    <Counter />
    </div>
    </div>
  </Box>
</Modal>
      
    

    </div>
  );
}

function RatingSize() {
  return (
    <Stack spacing={1}>
      <div>
      <Rating name="size-large" defaultValue={2} size="large" />
      </div>
    </Stack>
  );
}
function Counter(){
  const[like,setLike]=useState(0);
  const[dislike,setdislike]=useState(0);
  useEffect(()=>{
    console.log('like is updated',like);
  },[like])
  return(
    
    <div className="kii">
      
 <Button  variant="outlined" className="abd" 
  onClick={()=>setLike(like+1)} > <Badge badgeContent={like} color="primary">
      👍
    </Badge></Button>

      <Button variant="outlined"  className="abd"
      onClick={()=>setdislike(dislike+1)}  ><Badge badgeContent={dislike} color="error">
      👎
    </Badge></Button>

    </div>
  
  )
}

