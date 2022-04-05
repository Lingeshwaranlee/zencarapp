import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee, faGaugeSimpleHigh,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState , useEffect} from "react";
import IconButton from '@mui/material/IconButton';
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
import CloseIcon from '@mui/icons-material/Close';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
export function Tesla() {
  const cars= [
    {
      "id": "100",
      "name": "TESLA-Model 3",
      "poster": "https://i.insider.com/5a872a6cd030721b008b4727?width=1136&format=jpeg",
      "varients":["Base= 60-Lakhs","Middle= 80-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "Electrical",
     // "price": [{Base:60 Lakhs,Middle:80 Lakhs,Top:1.2 crores}],
     "price": "1.2 crores",
      "speed": "162 mph",
      "mileage": "498 km(single-charge)",
      "seat":"5",
    },
    {
      "id": "101",
      "name": "TESLA-Model S",
      "poster": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg",
      "varients":["Base= 80-Lakhs","Middle= 95-Lakhs","Top= 1.5-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      //"price": [{"Base":"80 Lakhs","Middle":"95 Lakhs","Top":"1.5 crores"}],
      "type": "Electrical",
      "speed": "155 mph",
      "mileage": "420 km(single-charge)",
      "seat":"5",
    },
    {
      "id": "102",
      "name": "TESLA-Model X",
      "poster": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-x-1636042860.jpg",
      "varients":["Base= 1.2-crores","Middle= 1.5-crores","Top= 2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      //"price": [{"Base":"1.2 crores","Middle":"1.5 crores","Top":"2 crores"}],
      "type": "Electrical",
      "speed": "155 mph",
      "mileage": "547 km(single-charge)",
      "seat":"5",
    },
    {
      "id": "103",
      "name": "TESLA-Model Y",
      "poster": "https://tesla-cdn.thron.com/delivery/public/image/tesla/c7359a76-05c0-4b00-a5ac-3ad005acdc5f/bvlatuR/std/0x0/Range_Desktop-poster",
      "varients":["Base= 70-Lakhs","Middle= 90-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      //"price": [{"Base":"70 Lakhs","Middle":"90 Lakhs","Top":"1.2 crores"}],
      "type": "Electrical",
      "speed": "155 mph",
      "mileage": "520 km(single-charge)",
      "seat":"5",
    }]
    const[east,seteast]=useState(false);

  return (
    <div>
   <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon> WELCOME TO TESLA WORLD <FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>
      
      <img src='https://wegoelectric.net/wp-content/uploads/2021/08/model-3-tesla.jpeg'></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div className="joy">
      <h1>About Tesla:</h1>
      <h2 className="tes1">Tesla’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Tesla was founded in 2003 by a group of engineers who wanted to
         prove that people didn’t need to compromise to drive electric 
         – that electric vehicles can be better, quicker and more fun to
          drive than gasoline cars. Today, Tesla builds not only all-electric 
          vehicles but also infinitely scalable clean energy generation and storage products.
           Tesla believes the faster the world stops relying on fossil fuels and moves towards
            a zero-emission future, the better.</h3>
            </div>
            <div className="folks">
              <h1 >🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ?  <iframe width="100%" height="720" src="https://www.youtube.com/embed/jWreyC2l-dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
          <img src="https://www.topgear.com/sites/default/files/images/news-article/2017/06/1a25df25e98a5d9f2c6a61a951de3498/scenic_mountain_1.jpg"></img>
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

