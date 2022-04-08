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
    {
      "id": "142",
      "name": "JAGUAR XE",
      "poster": "https://www.companycartoday.co.uk/wp-content/uploads/2019/05/XE-D180-Eiger-Grey_-123-1.jpg",
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
    }
  ];
  const[east,seteast]=useState(false);
  return (
    <div>
     <div className='header4'>
  <div className='header__logo1'>
  <img  className='header__logoImg4' src='https://1000marken.net/wp-content/uploads/2021/01/Jaguar-logo.png'
            alt='profile' />
           
  </div>
  </div>

<img src="https://cdn.motor1.com/images/mgl/q1ZM1/s1/2019-jaguar-f-pace-svr-first-drive.jpg"></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div className="joy">
    <h1>About Jaguar:</h1>
          <h2 className="tes1">Jaguar’s mission is to accelerate the world’s transition to sustainable energy.</h2>
          <h3>Jaguar Cars was the company that was responsible for the production of
             Jaguar cars until its operations were fully merged with those of Land Rover 
             to form Jaguar Land Rover on 1 January 2013.Jaguar is the luxury vehicle
              brand of Jaguar Land Rover, a British multinational car manufacturer with 
              its headquarters in Whitley, Coventry, England.</h3>
        </div>
        <div className="folks">
              <h1>🎉🎉GET READY FOLKS -- <Button variant="contained" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/bO08STHIhgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
        <img src="https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/40c263fc-b4c2-4a59-a6fe-d3c361b26c19/Jaguar%20F-Pace%20(6).jpeg"></img>
      </div>
 
  );
}

function CarData({name,poster,varients,color,type,speed,mileage,seat}) {
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
     <h2> Specs  <IconButton 
      
      color="primary" 
      aria-label="add to shopping cart"
      style={{ color:"rgb(41, 39, 39)"}}
      onClick={handleOpen}
      >
     <DashboardCustomizeIcon />
</IconButton>
</h2>
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
      
      
      {show?  <button className='btn'>ADD TO CART <AddShoppingCartIcon/></button> :""}
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
    <h3 style={ji}><FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>: {type}</h3> 
    <h3 style={ji}><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon>: {speed}</h3>
    <h3 style={ji}><FontAwesomeIcon icon={faGaugeSimpleHigh}></FontAwesomeIcon>:{mileage}</h3>
    <h3 style={ji}><AirlineSeatReclineExtraIcon/>:{seat}</h3>
    <h3 style={ji}> RATINGS<RatingSize/></h3>
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
