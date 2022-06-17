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
import { Header3 } from './Header3';
import { useHistory } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {AiFillCar} from "react-icons/ai";

//Benz page component
export function Benz() {
  const cars = [
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
      "id": "131",
      "name": "Mercedes-Benz EQE",
      "poster": "https://w0.peakpx.com/wallpaper/404/674/HD-wallpaper-mercedes-benz-eqe-350-amg-line-edition-1-2022-3.jpg",
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
      "poster": "https://img-ik.cars.co.za/news-site-za/images/2020/10/Mercedes-Benz-EClass-7.jpg",
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
  
  </div>
  </div>
      <Header3/>
      
      <h1 className="brand">BENZ-SERIES <AiFillCar/> </h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div style={{marginTop:"50px"}}>
    <div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.popsci.com/uploads/2022/04/01/stellantis.jpeg?auto=webp'></img></div>
  <div style={{ background: "white" ,color:" black",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1 style={{color:"crimson"}}>ELECTRIFIED V8 BITURBO GASOLINE ENGINE</h1>
  <h4 className="test1"style={{lineHeight:"30px",color:"black"}} >Mercedes-Benz added an electrified V8 Biturbo gasoline engine with a 48-volt on-board electrical system and generator to its GLE and GLS models. This new configuration produces 483 horsepower and 516 pound-feet of torque.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton><span style={{color:"crimson"}}>Engine</span> </h2></h4></div>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"150px"}}><img style={{width:"600px",height:"400px",objectFit:"cover"}} src='https://s1.cdn.autoevolution.com/images/news/mercedes-benz-launches-c-klasse-coupe-more-style-per-hour-campaign-35330_1.jpg'></img><h2 style={{textAlign:"center"}}></h2></div>
  <div><img style={{width:"600px",height:"400px",objectFit:"cover"}}  src='https://www.mercedes-benz-mena.com/en/passengercars/jordan/jordan-offers/no-offers/_jcr_content/par/productinfotextimage_1328515920/media/slides/videoimageslide/image.MQ6.7.20200401120326.jpeg'></img><h2 style={{textAlign:"center"}}></h2></div>
  
  
</div>

<img className="ishu1"  src="https://www.mercedes-benz.co.in/passengercars/content-pool/marketing-pool/product-page-stages/a-class-sedan-stage-v177-amg/_jcr_content/par/stageelementcampaign_585506700.MQ6.0.stage.20220420164351.jpeg"></img>
<div className='hover1'>
  
  <div style={{ background: "black" ,color:" white",paddingTop:"50px",paddingLeft:"100px",height:"440px"}}>
     <h1 style={{color:"crimson"}}>Interior of the Future</h1>
  <h4 className="test" style={{lineHeight:"30px",color:'white'}} >Benz effortlessly blends the classic with the strikingly modern. Dials that hark back to the Golden Age of Motoring are all digital, and yet are as striking to behold as any tesla at any point in history.Tesla motor cars have been graced by the Spirit of Ecstasy mascot, one of the most recognisable emblems ever created. Yet, remarkably, given her immense fame and global reach, aspects of her story remain open to speculation, confusion and no little controversy.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px",color:"white"}}><ArrowForwardIcon/></IconButton><span style={{color:"crimson"}}>Dashboard</span> </h2></h4></div>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/models/eqc/design/line-details/interior/_jcr_content/par/productinfotextimage/media2/slides/videoimageslide_8d19/image.MQ6.12.20200703092501.jpeg'></img></div>
</div>
<div className='hover2'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://electrek.co/wp-content/uploads/sites/3/2022/01/Mercedes-EQXX-Rear.jpg?quality=82&strip=all&w=1600'></img></div>
  <div style={{ background: "black" ,color:" white",paddingTop:"50px",paddingLeft:"100px",height:"440px"}}>
     <h1 style={{color:"crimson"}}>Vision EQXX </h1>
  <h4 className="test" style={{lineHeight:"30px",color:" white"}}>Mercedes-Benz has uncovered its new Vision EQXX concept electric car which claims a range of 1,000 km on a fully charged battery challenging Elon Musk's Tesla electric cars. The journey from Germany to the south of France began in cold and rainy circumstances, according to the company.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton><span style={{color:"crimson"}}>Vision</span> </h2></h4></div>
  
</div>
</div>
<div className="op" style={{ background: "black" ,color:" white",paddingTop:"10px",marginTop:"10px"}}>
  <h1 style={{color:"crimson"}}>EXPERIENCE</h1>
  <h3 className="tes"style={{lineHeight:"30px",color:" white"}} >As a world-class marque, there is more to Benz than meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px"}} src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_1458819270.component.damq2.3283870811362.jpg/Final%20EQC%20Homepage%20Banner%20Mobile.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}>It's more than electric. It's a Mercedes.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore offers</Button></div>
  <div><img style={{width:"400px"}}  src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_464863480.component.damq2.3282591253392.jpg/WhatsApp%20Live%20Chat%20Mobile%20Banner.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}>Help when you need it.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Chat Here</Button></div>
  <div><img style={{width:"400px"}} src='https://www.mercedes-benz.co.in/content/india/en/passengercars/_jcr_content/root/responsivegrid/simple_teaser_115569/simple_teaser_item_c_205597732.component.damq2.3292450215455.jpg/GLC%20banner_Mobile_1534x1151%20pixels-01.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}>Takes you to the most beautiful places  .</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">learn about</Button></div>
  
</div>
    <div className="joy">
    <h1 style={{color:"crimson"}}>About Benz:</h1>
      <h2 className="tes1">Benz’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3 className="tes"style={{lineHeight:"30px"}}>BENZ serves purely as a status symbol for some, while for others 
        it's a belief in the mantra “The Ultimate Driving Machine” and philosophy 
        of high revving engines. With that in mind, some are not only attracted to the
         Benz brand just because they produce great cars, but also because of their way of doing things..</h3>
            </div>
            <div className="folks">
           
            <Button variant="contained"  onClick={()=>seteast(!east)}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",maxWidth: '180px', maxHeight: '80px', minWidth: '180px', minHeight: '80px',fontSize:"19px",borderRadius:"12px"}} >PREVIEW-🎬</Button>

              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/csAXruiBLTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
             <div className='jh'>
              <img   src="https://www.bmw.mu/content/dam/bmw/common/home/teaser/bmw-x-series-ix-onepager-home-teaser-1680x756.jpg.asset.1635438185820.jpg"></img>
      </div>
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
