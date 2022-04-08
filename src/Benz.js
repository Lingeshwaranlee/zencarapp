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
export function Benz() {
  const cars = [
    {
      "id": "128",
      "name": "Mercedes-Benz EQB",
      "poster": "https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/models/eqb/suv-x243/pad/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210823082518.jpeg",
      "varients":["Base=70-Lakhs","Middle= 80-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Electrical",
      "speed": "180 km/h",
      "mileage": "471 Km(single-charge)",
      "seat":7,
    },
    {
      "id": "129",
      "name": "Mercedes-Benz EQS",
      "poster": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-eqs-138-1627066895.jpg?crop=0.651xw:0.578xh;0.207xw,0.245xh&resize=1200:*",
      "varients":["Base=1.75 crore","Middle=3.75 crore","Top= 5.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Electric sedan",
      "price": "1.75 crore",
      "speed": "200 km/h",
      "mileage": "770km(single-charge)",
      "seat":5,
    },
    {
      "id": "130",
      "name": "Mercedes-Benz AMG GT",
      "poster": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-GT/7842/1609141333284/front-left-side-47.jpg",
      "varients":["Base=2.64 crore","Middle=3.75 crore","Top=7.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
      "speed": "312 km/h",
      "mileage": "8-11 km/l combined",
      "seat":2,
    },
    {
      "id": "131",
      "name": "Mercedes-Benz EQE",
      "poster": "https://imgd.aeplcdn.com/1200x900/n/cw/ec/108113/exterior-left-front-three-quarter.jpeg?isig=0&q=75",
      "varients":["Base=70 lakhs","Middle=1.75 crore","Top=3.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Electrical",
      "speed": "137 km/h",
      "mileage": "660 km(single-charge)",
      "seat":5,
    },
    {
      "id": "132",
      "name": "Mercedes-Benz E-Class Cabriolet Facelift",
      "poster": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200527021853_Mercedes-E-Class_Cabriolet.jpg",
      "varients":["Base=84 lakhs","Middle=1.75 crore","Top=3.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Petrol",
      "speed": "155 km/h",
      "mileage": "10 kmpl",
      "seat":5,
    },
  
    {
      "id": "133",
      "name": "Mercedes-Benz GLS 63",
      "poster": "https://www.mercedes-benz.com/en/vehicles/passenger-cars/gls/mercedes-amg-gls-63-4matic/_jcr_content/image/MQ6-12-image-20191120194413/00-mercedes-benz-2020-mercedes-amg-gls-63-4matic-x167-polar-white-2560x1440.jpeg",
      "varients":["Base= 1.92 crore","Middle= 1.75 crore","Top= 4.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "petrol",
      "price": "1.92 crore",
      "speed": "174 km/h",
      "mileage": "11.5kmpl",
      "seat":6,
    },
  ];

  const[east,seteast]=useState(false);
  return (
    <div>
      <div className='header3'>
  <div className='header__logo1'>
  <img className='header__logoImgw' src="http://www.vonsung.com/wp-content/uploads/2020/04/mercedes-benz-logo-horizontal.png"></img>
  <img  className='header__logoImg3' src='https://www.carlogos.org/logo/Mercedes-Benz-emblem-1926-1920x1080.png'
            alt='profile' />
  </div>
  </div>
      <img src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/glc/coupe/class-page/series/2022-GLC-COUPE-CH-1-1-DR.jpg"></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div className="joy">
    <h1>About Bmw:</h1>
      <h2 className="tes1">BMW’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>BMW serves purely as a status symbol for some, while for others 
        it's a belief in the mantra “The Ultimate Driving Machine” and philosophy 
        of high revving engines. With that in mind, some are not only attracted to the
         BMW brand just because they produce great cars, but also because of their way of doing things..</h3>
            </div>
            <div className="folks">
              <h1>🎉🎉GET READY FOLKS -- <Button variant="contained" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/csAXruiBLTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
             <div className='jh'>
              <img   src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/glc/coupe/class-page/series/2022-GLC-COUPE-HERO-DR.jpg"></img>
      </div>
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
    <span className="zoo">
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