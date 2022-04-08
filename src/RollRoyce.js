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

export function RollRoyce() {
  const cars = [
    {
      "id": "134",
      "name": "ROLLS-ROYCE GHOST",
      "poster": "https://www.wallpaperup.com/uploads/wallpapers/2017/10/23/1129940/de7f2008221d92f2f63ecfa1037e4675-700.jpg",
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
      "varients":["Base= 6.9-crores","Middle=9.4-crores","Top= 12-crores"],
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
     
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div className="joy">
    <h1>About RollRoyce:</h1>
      <h2 className="tes1">RollRoyce’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Rolls-Royce Holdings plc is a British multinational aerospace and defence company
         incorporated in February 2011. The company owns Rolls-Royce, a business established 
         in 1904 which today designs, manufactures and distributes power systems for aviation
          and other industries</h3>
            </div>
            <div className="folks">
              <h1>🎉🎉GET READY FOLKS -- <Button variant="contained" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}  onClick={()=>seteast(!east)}>TRAILER</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="701" src="https://www.youtube.com/embed/_JP0fl3S1uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
          <img src="https://www.motortrend.com/uploads/sites/5/2020/08/2021_Rolls-Royce_Ghost-3.jpg"></img>
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

