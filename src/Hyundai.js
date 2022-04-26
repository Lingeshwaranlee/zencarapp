import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee,faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
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
import { Header0 } from './Header0';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useHistory } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Hyundai() {
  const cars= [
    {
      "id": "114",
      "name": "HYUNDAI Kona Electric",
      "poster": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Kona-Electric-2021/8178/Hyundai-Kona-Electric-2021-/1605186918196/front-left-side-47.jpg",
      "varients":["Base= 23.79-Lakhs","Middle= 32-Lakhs","Top=38-Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Electric",
      "speed": "155 km/h",
      "mileage": "452 Km(single-charge)",
      "seat":5,
    },
  
    {
      "id": "115",
      "name": "HYUNDAI Creta",
      "poster": "https://w0.peakpx.com/wallpaper/775/571/HD-wallpaper-hyundai-creta-road-2021-cars-crossovers-mx-spec-su2-2021-hyundai-creta-korean-cars-hyundai.jpg",
      "varients":["Base= 17.79-Lakhs","Middle= 23-Lakhs","Top=28-Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Diesel/Petrol",
      "speed": "195 kmph",
      "mileage": "17-21 km/l combined",
      "seat":5,
    },
    {
      "id": "116",
      "name": "HYUNDAI Tucson",
      "poster": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/7509/1594715357564/front-left-side-47.jpg",
      "varients":["Base= 27.5 Lakhs","Middle= 35.5 Lakhs","Top=39-Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Diesel/Petrol",
      "speed": "120mph",
      "mileage": " 13-17 km/l combined",
      "seat":5,
    },
    {
      "id": "117",
      "name": "HYUNDAI Nexo",
      "poster": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-46979-2022nexo-1635872849.jpg?crop=0.824xw:0.925xh;0.104xw,0.0481xh&resize=640:*",
      "varients":["Base= 65 Lakhs","Middle= 79 Lakhs","Top= 98-Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
      "price": "65 Lakhs",
      "speed": "179 km/h.",
      "mileage": "666 kilometres (WLTP) ",
      "seat":5,
    },
    {
      "id": "118",
      "name": "HYUNDAI i20",
      "poster": "https://cdni.autocarindia.com/ExtraImages/20200930123556_Hyundai-i20-N-Line-front-1.jpg",
      "varients":["Base= 6 Lakhs","Middle= 9 Lakhs","Top= 11-Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
      "price": "6 Lakhs",
      "speed": "151 kmph.",
      "mileage": "13-17 km/l combined",
      "seat":5,
      "seat":5,
    },
    {
      "id": "119",
      "name": "HYUNDAI Elantra",
      "poster": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-hyundai-elantra-mmp-1-1634851642.jpg?crop=0.859xw:0.644xh;0.0929xw,0.202xh&resize=1200:*",
      "varients":["Base= 21.13 Lakh","Middle= 28.13 Lakh","Top= 36-Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Diesel/Petrol",
      "price": " 21.13 Lakh.",
      "speed": "140mph. ",
      "mileage": "14-23 km/l combined",
      "seat":5,
    },
    {
      "id": "120",
      "name": "HYUNDAI Palisade",
      "poster": "https://images.caricos.com/h/hyundai/2020_hyundai_palisade/images/2560x1440/2020_hyundai_palisade_13_2560x1440.jpg",
      "varients":["Base= 40 Lakhs","Middle= 56 Lakhs","Top= 60 Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Diesel",
      "speed": "210 km/h",
      "mileage": "26 MPG",
      "seat":5,
    },
    {
      "id": "121",
      "name": "HYUNDAI Venue",
      "poster": "https://images.firstpost.com/wp-content/uploads/2019/04/Large-36140-2020Venue-4.jpg",
      "varients":["Base= 11.87 Lakh","Middle= 19 Lakhs","Top= 28 Lakhs"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Diesel/Petrol",
      "speed": "160km/h",
      "mileage": "17-23 km/l combined",
      "seat":5,
    },
  ];
  const[east,seteast]=useState(false);
  return (
    
    <div>
    <div className='header1'>
  <div className='header__logo1'>
   
  
  </div>
  </div>
     
      <Header0/>
      <h1 className="brand">HYUNDAI-SERIES <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div style={{marginTop:"50px"}}>
    <div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.popsci.com/uploads/2022/04/01/stellantis.jpeg?auto=webp'></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1> ENGINE & PERFORMANCE</h1>
  <h4 className="test"style={{lineHeight:"30px"}} >With Hyundai’s infotainment system, you’re seamlessly connected to the rest of the world.All the power and agility of a true thoroughbred. With state-of-the art driving systems making an unforgettable experience.<ul><li>Fuel efficiency</li><li>high torque</li><li>maximum speed</li><li>Stolen vehicle tracking</li><li>Intrusion alert</li></ul></h4></div>
  
</div>

<div className='fog' >
  <div style={{paddingLeft:"150px"}}><img style={{width:"600px",height:"400px",objectFit:"cover"}} src='https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20-n-line/Highlights/mob/Hyundai-i20Nline-Highlight-middle-mob-tab-800x530-1.jpg'></img><h2 style={{textAlign:"center"}}></h2></div>
  <div><img style={{width:"600px",height:"400px",objectFit:"cover"}}  src='https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20-n-line/Highlights/mob/Hyundai-i20Nline-Highlight-middle-mob-tab-800x530-8.jpg'></img><h2 style={{textAlign:"center"}}></h2></div>
  
  
</div>
<div className="op" style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"10px",marginTop:"10px"}}>
  <h1 >EXPERIENCE</h1>
  <h3 className="tes"style={{lineHeight:"30px"}} >As a world-class marque, there is more to Hyundai than meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"300px",objectFit:"cover"}} src='https://www.hyundaicanada.com/-/media/hyundai/showroom/2022/kona-electric/exterior-feature-gallery/thumbnail/medium/kona_electric_exterior_f7.jpg?h=500&w=600&la=en&hash=4905348385BCD01E9ECC4D249E8D4A7FC3763C11'></img><p style={{textAlign:"center",fontSize:'18px'}}>It's more than electric. It's a Hyundai kona.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">IT'S Kona</Button></div>
  <div><img style={{width:"400px",height:"300px",objectFit:"cover"}}  src='https://www.insideevsforum.com/community/index.php?media/kona-electric-interior-2.84/full'></img><p style={{textAlign:"center",fontSize:'18px'}}>Eye Catching Dashboard.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">CONNECTS</Button></div>
  <div><img style={{width:"400px",height:"300px",objectFit:"cover"}} src='https://www.hyundaicanada.com/-/media/hyundai/showroom/2022/kona-electric/exterior-feature-gallery/thumbnail/large/kona_electric_exterior_f3.jpg?h=1024&w=1024&la=en&hash=FBEE5DEB1F69E39CDEE98BB7D5A043700C5F635F'></img><p style={{textAlign:"center",fontSize:'18px'}}>Rides very smooth</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Book Ride</Button></div>
  
</div>
<img className="ishu"  src="https://cars.tatamotors.com/images/dark/altroz-imaginator.jpg"></img>
<div className='hover1'>
  
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>ADVENT OF SMART CARS</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >The age of smart cars is approaching fast as automobiles are increasingly making full use of electronic technology developments. There are already cars out there which can drive themselves, automatically adjusting its speed and maneuvering into the hard.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton>  Smart</h2></h4></div>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://im.indiatimes.in/amp/2019/May/hyundai_cars_hyundai_electric_cars_hyundai_smart_cars_hyundai_motors_india_hyundai_smart_mobilit_1557393935.jpg'></img></div>
</div>
<div className='hover2'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='http://picolio.auto123.com/auto123-media/articles/2018/8/65046/hyundai_kona_auto123fr.jpeg'></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>Hyundai Kona EV </h1>
  <h4 className="test" style={{lineHeight:"30px"}}>The newly-styled sharper headlamps stretch around the side of the car. The high-tech headlamp inner bezel now incorporates multifaceted reflector (MFR) technology. There are new vertical air inlets in front of the wheel arch claddings, which claims to enhance its aerodynamics.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton>  EV</h2></h4></div>
  
</div>
</div>
    <div className="joy">
    <h1>About Hyundai:</h1>
      <h2 className="tes1">HYUNDAI’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3 className="tes">Hyundai Motor Company, often abbreviated to Hyundai Motors and commonly 
        known as Hyundai, is a South Korean multinational automotive manufacturer
         headquartered in Seoul, South Korea. Hyundai Motor Company was founded in 1967.Hyundai believes the faster the world stops relying on fossil fuels and moves towards a zero-emission future, the better.</h3>
            </div>
            <div className="folks">
            <Button variant="contained"  onClick={()=>seteast(!east)}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",maxWidth: '180px', maxHeight: '80px', minWidth: '180px', minHeight: '80px',fontSize:"19px",borderRadius:"12px"}} >PREVIEW-🎬</Button>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/N3tH_3A1000" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
               <img  src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/pc/march/Hyundai_CRETA_SUV_MainKV_PC_1860x540.jpg"></img>
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
       <img  src={poster} alt={"profile"}  className='tesla-poster'></img>
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
      <Button onClick={handleOpen} style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",margin:"10px",paddingLeft:"10px",paddingRight:"10px"}}>Specs  <IconButton 
      
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
    <span className="qoo">
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

