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
      "poster": "https://images.news18.com/ibnlive/uploads/2020/12/1608967064_2020-hyundai-creta.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal",
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
      "name": "HYUNDAI Casper",
      "poster": "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Hyundai-Casper/8573/1630559299958/front-left-side-47.jpg?tr=w-420",
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
      "poster": "https://images.hgmsites.net/hug/hyundai-palisade_100800712_h.jpg",
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
      "poster": "https://sparepartsnepal.com/wp-content/uploads/2020/08/Hyundai-Venue-Spare-Parts-Price-in-Nepal.png",
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
     <h1 className='world'><FontAwesomeIcon icon={faChargingStation} ></FontAwesomeIcon> WELCOME TO HYUNDAI WORLD <FontAwesomeIcon icon={faChargingStation} ></FontAwesomeIcon></h1>
      <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Tucson/Highlights/Hyundai-Tucson-InnerPage-Banner2-PC-new.jpg"></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div className="joy">
    <h1>About Hyundai:</h1>
      <h2 className="tes1">HYUNDAI’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Hyundai Motor Company, often abbreviated to Hyundai Motors and commonly 
        known as Hyundai, is a South Korean multinational automotive manufacturer
         headquartered in Seoul, South Korea. Hyundai Motor Company was founded in 1967.</h3>
            </div>
            <div className="folks">
              <h1>🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/N3tH_3A1000" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
               <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/pc/march/Hyundai_CRETA_SUV_MainKV_PC_1860x540.jpg"></img>
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
      
      
      {show?  <button className='btn'>ADD TO CART<AddShoppingCartIcon/></button> :""}
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
