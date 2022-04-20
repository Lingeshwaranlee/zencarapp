import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee, faGaugeSimpleHigh} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Badge from '@mui/material/Badge';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Header1 } from "./Header1";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useHistory } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export function RollRoyce() {
  const cars = [
    {
      "id": "134",
      "name": "ROLLS-ROYCE GHOST",
      "poster": "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-8-2-commission/component-assets/inspired-specs/rolls-royce-ghost-extended-commission-inspired-specs-offgrid-aura.jpg/jcr:content/renditions/cq5dam.web.1920.webp",
      "varients":["Base= 7.9-crores","Middle=9-crores","Top= 11-crores"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol",
      "speed": "155 miles per hour",
      "mileage": " 6.33 kmpl",
      "seat":"5",
    },
    {
      "id": "135",
      "name": "ROLLS-ROYCE PHANTOM",
      "poster": "https://imageio.forbes.com/specials-images/imageserve/617a778d66fbfc6c231e3a1a/The-new-Rolls-Royce-Ghost-Black-Badge/960x0.jpg?fit=bounds&format=jpg&width=960",
      "varients":["Base= 7.9-crores","Middle=9-crores","Top= 11-crores"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol",
      "price": "10.48 Crore",
      "speed": "155 mph",
      "mileage": "9.8 kmpl",
      "seat":"5",
    },
  
    {
      "id": "136",
      "name": "ROLLS-ROYCE  CULLINAN",
      "poster": "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/4-0-bespoke/components/D_COLLECTION_OFFGRID_CAROUSEL_LSWRAITH.jpg/jcr:content/renditions/cq5dam.web.1920.webp",
      "varients":["Base= 9.9-crores","Middle=15.4-crores","Top= 22-crores"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol",
       "speed": "155 miles per hour",
      "mileage": "9.5 kmpl",
      "seat":"5",
    },
  
    {
      "id": "137",
      "name": "ROLLS-ROYCE WRAITH",
      "poster": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F04%2Fspofec-overdose-rolls-royce-black-badge-wraith-wide-body-kit-tuned-v12-custom-rare-limited-edition-novitec-0.jpg?w=960&cbr=1&q=90&fit=max",
      "varients":["Base= 6.9-crores","Middle=9.4-crores","Top= 12-crores"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol",
      "price": "7.21 Crore",
      "speed": "155 miles per hour",
      "mileage": "10.2 kmpl",
      "seat":"5",
    },
  
    {
      "id": "138",
      "name": "ROLLS-ROYCE DAWN",
      "poster": "http://cdn.carbuzz.com/gallery-images/1600/863000/600/863645.jpg",
      "varients":["Base= 6.9-crores","Middle=9.4-crores","Top= 12-crores"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Petrol",
      "price": "7.85 Crore",
      "speed": "155 miles per hour",
      "mileage": "9.8 kmpl",
      "seat":"5",
    },
    {
      "id": "139",
      "name": "ROLLS-ROYCE SPECTRE",
      "poster": "https://back.3blmedia.com/sites/default/files/styles/ratio_3_2/public/triplepundit/wide/Rolls-Royce%20EV.jpg?h=9f125b1c",
      "varients":["Base= 10.9-crores","Middle=29.4-crores","Top= 42-crores"],
      "color":["White","Black","Red","Blue","Brown","yellow","green","orange","aqua"],
      "type": "Electric",
      "price": "7.85 Crore",
      "speed": "155 miles per hour",
      "mileage": "9.8 kmpl",
      "seat":"5",
    },
   
  ];
  
  const[east,seteast]=useState(false);
  return (
    <div>
      <div className='header1'>
  <div className='header__logo1'>
    <img className='header__logoImgq' src="https://www.carlogos.org/logo/Rolls-Royce-RR-logo-1920x1080.png"></img>
  
  </div>
  </div>
      <Header1/>
     
      
      <h1 className="brand">ROLLSROYCE-SERIES  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div style={{marginTop:"50px"}}>
    <div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/components/rolls-royce-black-badge-cullinan_product-page-distictive-in-design-bg-d.jpg/jcr:content/renditions/cq5dam.web.828.webp'></img></div>
  <div style={{ background:  "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>DISTINCTIVE IN DESIGN</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >Phantom effortlessly blends the classic with the strikingly modern. Dials that hark back to the Golden Age of Motoring are all digital, and yet are as striking to behold as any Rolls-Royce at any point in history.Rolls-Royce motor cars have been graced by the Spirit of Ecstasy mascot, one of the most recognisable emblems ever created. Yet, remarkably, given her immense fame and global reach, aspects of her story remain open to speculation, confusion and no little controversy.</h4></div>
  
</div>
<div className="op" style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"10px",marginTop:"10px"}}>
  <h1 >EXPERIENCE</h1>
  <h3 className="tes"style={{lineHeight:"30px"}} >As a world-class marque, there is more to TESLA than meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"300px",objectFit:"cover"}} src='https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2020/09/02191145/2021-rolls-royce-ghost-details.jpg'></img><h2 style={{textAlign:"center"}}>It's more than Heritage meets modernity. It's a ROLLSROYCE.</h2></div>
  <div><img style={{width:"400px",height:"300px",objectFit:"cover"}}  src='https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/coolbox/component-assets/accessories-product-coolbox-carousel-curtained-interior.jpg'></img><h2 style={{textAlign:"center"}}>a glass holder can be securely fixed to the cup-holders.</h2></div>
  <div><img style={{width:"400px",height:"300px",objectFit:"cover"}} src='https://www.thehogring.com/wp-content/uploads/2020/09/The-Hog-Ring-How-Much-the-Rolls-Royce-Umbrella-Costs.jpg'></img><h2 style={{textAlign:"center"}}>With its classic design and superior quality, the Rolls-Royce umbrella .</h2></div>
  
</div>
<div className='hover1'>
  
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>SATELLITE-AIDED TRANSMISSION</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >Phantom predicts the road ahead using satellite communication technology. Then, the correct gear from the eight-speed transmission is  selected, making motoring natural and effortless.The Wraith uses global  positioning satellite data to determine the road and conditions in real   time. This data is then used to anticipate how and when to shift gears, in  what is called Satellite Aided Transmission (SAT)</h4></div>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.satellitetoday.com/wp-content/uploads/2017/07/04-swb_lights-jpg-rr-1366-med.jpg'></img></div>
</div>
<div className='hover2'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://media.wired.co.uk/photos/606da4b6581351b2c44d7c98/16:9/w_2560%2Cc_limit/RR11_FRONT_DARK_02.jpg'></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>NIGHT VISION</h1>
  <h4 className="test"style={{lineHeight:"30px"}} >Sublime comforts and intuitive, discreet technology are always at your  fingertips. Phantom’s Night Vision option places an infrared camera in  the Pantheon Grille. Its reach extends far beyond the headlights’ beam to  alert the driver to hidden dangers on the road ahead, such as people and  animals, up to 300 metres away.</h4></div>
  </div>
</div>
    <div className="joy">
    <h1>About RollRoyce:</h1>
      <h2 className="tes1">RollRoyce’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3 className="tes"style={{lineHeight:"30px"}}>Rolls-Royce Holdings plc is a British multinational aerospace and defence company
         incorporated in February 2011. The company owns Rolls-Royce, a business established 
         in 1904 which today designs, manufactures and distributes power systems for aviation
          and other industries</h3>
            </div>
            <div className="folks">
            <Button variant="contained"  onClick={()=>seteast(!east)}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",maxWidth: '180px', maxHeight: '80px', minWidth: '180px', minHeight: '80px',fontSize:"19px",borderRadius:"12px"}} >PREVIEW-🎬</Button>
              
              </div>
              {east ? <iframe width="100%" height="701" src="https://www.youtube.com/embed/_JP0fl3S1uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
          <img  style={{ width:"1505px", height:"750px",objectFit:"cover"}} src="https://cdn.wallpapersafari.com/2/83/Qe7wco.jpg"></img>
      </div>
 
  );
}

function CarData({name,poster,varients,color,type,speed,mileage,seat}) {
  const history =useHistory();
  
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
      <Button   onClick={handleOpen}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",margin:"10px",paddingLeft:"10px",paddingRight:"10px"}}>Specs  <IconButton 
      
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
      
      
     {show?   <Button variant="contained" className='bt' onClick={() => history.push("/book")} style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}>ADD TO CART<AddShoppingCartIcon/></Button> :""}
      <div className="yuvan">
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <div>
    <h2 className='head'>{name}
    <span className="goo">
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

