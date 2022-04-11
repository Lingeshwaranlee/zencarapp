import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChargingStation,faCar, faGasPump, faGaugeHigh, faIndianRupee,faGaugeSimpleHigh} from "@fortawesome/free-solid-svg-icons";
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
import { Header5 } from './Header5';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useHistory } from 'react-router-dom';
export function Tata() {
  const cars = [
    {
      "id": "104",
      "name": "TATA Punch",
      "poster": "https://cars.tatamotors.com/images/punch/tata-punch-features-m-banner.jpg",
      "varients":["Base= 9.18 Lakh","Middle= 10-Lakhs","Top= 13.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
       "type": "Petrol",
      "speed": "150 kmph",
      "mileage": "19 km/l combined",
      "seat":5,  
      },
    {
      "id": "105",
      "name": "TATA Nexon",
      "poster": "https://theautomotiveblog.com/wp-content/uploads/2021/06/nexon-mobile-price-overlay.png",
      "varients":["Base= 13.73 Lakh","Middle= 16 Lakhs","Top= 18.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Diesel/Petrol",
      "speed": "180 kph",
      "mileage": "16-22 km/l combined",
      "seat":5, 
       },
    {
      "id": "106",
      "name": "TATA Harrier",
      "poster": "https://wallpaperaccess.com/full/2597717.png",
      "varients":["Base= 21.70 Lakh","Middle= 25.70 Lakh","Top= 28.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol/CNG",
      "speed": "180 kmph",
      "mileage": "15-16 km/l combined",
      "seat":5,    
    },
    {
      "id": "107",
      "name": "TATA  Tiago",
      "poster": "https://www.carbikeindia.com/wp-content/uploads/2021/08/Tata-Tiago-NRG-Launch-in-India.jpg",
      "varients":["Base= 7.70 Lakh","Middle= 9.70 Lakh","Top= 13.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
       "type": "Diesel/Petrol",
      "speed": "165 kmph",
      "mileage": "20 km/l combined",
      "seat":6,  
      },
    {
      "id": "108",
      "name": "TATA Altroz",
      "poster": "https://cars.tatamotors.com/images/altroz-gallery-mobile-banner-overlay.jpg",
      "varients":["Base= 9.70 Lakh","Middle= 12.70 Lakh","Top= 17.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
       "type": "Diesel/Petrol",
      "speed": "165+ kmph",
      "mileage": "19-25 km/l combined",
      "seat":5,   
     },
    {
      "id": "109",
      "name": "TATA Tigor",
      "poster": "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tata-Tigor/6639/front-right-view-120.jpg",
      "varients":["Base= 8.70 Lakh","Middle= 11.70 Lakh","Top= 15.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol/CNG",
      "price": "8.41 Lakh",
      "speed": "164 kmph",
      "mileage": "19 km/l combined",
      "seat":5,   
     },
    {
      "id": "110",
      "name": "TATA Safari",
      "poster": "http://www.firstpost.com/wp-content/uploads/2021/01/2021-tata-safari-21-min.jpg",
      "varients":["Base= 23.29 Lakh","Middle= 28.29 Lakh","Top= 35.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Diesel",
      "price": "23.29 Lakh",
      "speed": "180 kmph",
      "mileage": "14-16 km/l combined",
      "seat":5,    
    },
    {
      "id": "111",
      "name": "TATA Tiago NRG",
      "poster": "https://images.news18.com/ibnlive/uploads/2021/08/1628423383_tata-tiago-nrg-3.jpg?impolicy=website&width=0&height=0",
      "varients":["Base= 7.17 Lakh","Middle= 9.29 Lakh","Top= 13.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol",
      "speed": "150 kmph",
      "mileage": "20 km/l combined",
      "seat":5,   
     },
    {
      "id": "112",
      "name": "TATA Nexon EV",
      "poster": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/7042/1576845369560/front-left-side-47.jpg",
      "varients":["Base=13.14 Lakh","Middle= 19.14 Lakh","Top= 23.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Electric",
      "price": "13.14 Lakh",
      "speed": "120kmph",
      "mileage": "312 km(single-charge)",
      "seat":5,  
    },
    {
      "id": "113",
      "name": "TATA Tigor EV",
      "poster": "https://c.ndtvimg.com/2021-08/lfh1n2po_tata-tigor-ev_625x300_25_August_21.jpg",
      "varients":["Base=13.14 Lakh","Middle= 16.14 Lakh","Top= 18.18 Lakh"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Electric",
      "speed": "80kph",
      "mileage": "306km(single-charge)",
      "seat":5,  
      },
  ];
  const[east,seteast]=useState(false);
  
  return (
    <div>
    <div className='header1'>
  <div className='header__logo1'>
    <img className='header__logoImgq' src="https://1000logos.net/wp-content/uploads/2020/03/Tata-Logo.jpg"></img>
  
  </div>
  </div>
      
      <Header5/>
      
      <h1 className="brand">TATA-SERIES  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div className="joy">
    <h1>Tata</h1>
      <h2 className="tes1">TATA’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3 className="tes">Tata Group is an Indian multinational conglomerate headquartered in Mumbai.
         Founded in 1868 by Jamshedji Tata, the group gained international recognition
          after purchasing several global companies. It is one of the biggest and oldest
           industrial groups in India.</h3>
            </div>
            <div className="folks">
            <h1 >TRAILER--<IconButton  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  onClick={()=>seteast(!east)} ><VideoCameraBackIcon/></IconButton> </h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/Rag287hQj28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  :""}
            
                 <img src="https://cars.tatamotors.com/images/kaziranga/harrier-kaziranga-desktop-banner-1.png"></img>
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
      
      
      {show?  <button className='btn'onClick={() => history.push("/book") }>ADD TO CART<AddShoppingCartIcon/></button> :""}
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

