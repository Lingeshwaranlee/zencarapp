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
import {AiFillCar} from "react-icons/ai";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Header } from "./Header";
import { useHistory } from 'react-router-dom';

//tesla page component
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export function Tesla() {
  const cars= [
    {
      "id": "100",
      "name": "TESLA-Model 3",
      "poster": "https://tesla-cdn.thron.com/delivery/public/image/tesla/35861782-9705-4f73-84f0-86d615adb661/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD",
      "varients":["Base= 60-Lakhs","Middle= 80-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown",],
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
      "poster": "https://tesla-cdn.thron.com/delivery/public/image/tesla/5102fa27-0d41-4f79-b07b-7ffb1ceb55ff/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD",
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
      "poster": "https://images.cars.com/cldstatic/wp-content/uploads/tesla-model-y-2022-01-blue-exterior-front-angle-sedan-scaled.jpg",
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
    
      
     <Header/>
      
      <h1 className="brand">TESLA-SERIES  <AiFillCar/></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    
    <div style={{marginTop:"50px"}}>
    <div className='hover'>
  <div><img  style={{ width:"800px", height:"540px",objectFit:"cover"}} src='https://tesla-cdn.thron.com/delivery/public/image/tesla/b89f75da-2da4-4c2f-a94e-458b58bdfc26/bvlatuR/std/4096x3072/Model-S-Specs-Hero-Desktop-LHD'></img></div>
  <div style={{ background: "black" ,color:" white",paddingTop:"50px",paddingLeft:"100px",height:"490px"}}>
     <h1 style={{color:"crimson"}}>Exterior of the Future</h1>
  <h4 className="test"style={{lineHeight:"30px",color:" white"}} >Tesla effortlessly blends the classic with the strikingly modern. Dials that hark back to the Golden Age of Motoring are all digital, and yet are as striking to behold as any tesla at any point in history.Tesla motor cars have been graced by the Spirit of Ecstasy mascot, one of the most recognisable emblems ever created. Yet, remarkably, given her immense fame and global reach, aspects of her story remain open to speculation, confusion and no little controversy.<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px",color:" white"}}><ArrowForwardIcon/></IconButton>  <span style={{color:"crimson"}}>Safety</span></h2></h4></div>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"150px"}}>
    <img style={{width:"600px",height:"400px",objectFit:"cover"}} src='https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD'></img>
  
  </div>
  <div><img style={{width:"600px",height:"400px",objectFit:"cover"}}  src='https://images.hgmsites.net/hug/2017-tesla-model-x_100585116_h.jpg'></img></div>
  
  
</div>

<img className="ishu1"   src="https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2"></img>
<div className="article">
  <img className="ishu" src="https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/keyhighlights/thar/desktop/engine_desktop_1920x745.png?la=en&rev=ca60c89b7591439eba4022c75e691fb5&extension=webp"></img>
<h4 className="header1">Power that takes your breath away</h4>
<p className="header2">Choose between the All-New mStallion150 petrol<br></br> engine and mHawk130 diesel engine. With 6-speed <br></br>automatic and manual transmission options.</p>

</div>
<div className='hover2'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://tesla-cdn.thron.com/delivery/public/image/tesla/b7e5f13a-e8f8-4428-b29e-b2ba6cf5220b/bvlatuR/std/1920x1080/MS-Safety-Hero-Desktop'></img></div>
  <div style={{ background: "white" ,color:" black",paddingTop:"50px",paddingLeft:"100px",height:"440px"}}>
     <h1 style={{color:"crimson"}}>High Impact Protection</h1>
  <h4 className="test" style={{lineHeight:"30px",color:"black"}}>Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla???s latest active safety features, such as Automatic Emergency Braking, at no extra cost..<br></br><br></br><h2>More About <IconButton style={{marginTop:"1px"}}><ArrowForwardIcon/></IconButton> <span style={{color:"crimson"}}>Protection</span> </h2></h4></div>
  
</div>
</div>
<div className="op" style={{ background: "black" ,color:" white",paddingTop:"10px",marginTop:"10px"}}>
  <h1  style={{color:"crimson"}} >EXPERIENCE</h1>
  <h3 className="tes"style={{lineHeight:"30px",color:" white"}} >As a world-class marque, there is more to TESLA than meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://i.insider.com/60f860760729770012b91c62?width=700'></img><p style={{textAlign:"center",fontSize:'18px'}}>It's more than electric. It's a Tesla.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore Offers</Button></div>
  <div><img style={{width:"400px",height:'280px',objectFit:"cover"}}  src='https://cdn.shopify.com/s/files/1/0173/8204/7844/articles/1_4bce9de4-7beb-4f2f-a652-0943acff931e_1200x.jpg?v=1643994538'></img><p style={{textAlign:"center",fontSize:'18px'}}>Dark eye in the hustle .</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">Explore Offers</Button></div>
  <div><img style={{width:"400px",height:"280px",objectFit:"cover"}} src='https://techcrunch.com/wp-content/uploads/2017/08/tesla-model-3-in-car-ux.jpg'></img><p style={{textAlign:"center",fontSize:'18px'}}> Connects you worldwide.</p><Button style={{marginLeft:"100px",width:"200px",background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",}} variant="contained">connect</Button></div>
  
</div>
    <div className="joy">
      <h1  style={{color:"crimson"}}>About Tesla:</h1>
      <h2 className="tes1">Tesla???s mission is to accelerate the world???s transition to sustainable energy.</h2>
      <h3 className="tes"style={{lineHeight:"30px"}}>Tesla was founded in 2003 by a group of engineers who wanted to
         prove that people didn???t need to compromise to drive electric 
         ??? that electric vehicles can be better, quicker and more fun to
          drive than gasoline cars. Today, Tesla builds not only all-electric 
          vehicles but also infinitely scalable clean energy generation and storage products.
           Tesla believes the faster the world stops relying on fossil fuels and moves towards
            a zero-emission future, the better.</h3>
            </div>
            <div className="folks">
            <Button variant="contained"  onClick={()=>seteast(!east)}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",maxWidth: '180px', maxHeight: '80px', minWidth: '180px', minHeight: '80px',fontSize:"19px",borderRadius:"12px",padding:"5px"}} >PREVIEW-????</Button>
              
              </div>
              {east ?  <iframe width="100%" height="720" src="https://www.youtube.com/embed/jWreyC2l-dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
         
          <img className="ishu" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/b89f75da-2da4-4c2f-a94e-458b58bdfc26/bvlatuR/std/4096x3072/Model-S-Specs-Hero-Desktop-LHD"></img>
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
     <DashboardCustomizeIcon  />
</IconButton>
</Button> 

</div> :""}
       
       
       <div className='flex'>
       

       {show?  <div className='tamil'>
     <h2>varients:</h2>
       <select className='yaal'  >
         {varients.map(varients=>{
           return <option style={{padding:"10px"}}>{varients}</option>
         })}
       </select>
       </div>  :""}
       {show?  <div className='zee'>
      <h2>color:</h2> 
      <select className='yaal'>
         {color.map(color=>{
           return <option  value={color}>{color}</option>
         })}
       </select> 
       </div>  :""}
     </div>
      
      
      {show?   <Button variant="contained" className='bt' onClick={() => history.push("/book")} style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)"}}><AddShoppingCartIcon/> <span></span>ADD TO CART</Button> :""}
     
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
      ????
    </Badge></Button>

      <Button variant="outlined"  className="abd"
      onClick={()=>setdislike(dislike+1)}  ><Badge badgeContent={dislike} color="error">
      ????
    </Badge></Button>

    </div>
  
  )
}


