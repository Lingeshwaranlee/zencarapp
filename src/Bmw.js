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
import { Header2 } from './Header2';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { useHistory } from 'react-router-dom';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export function Bmw() {
  const cars = [
    {
      "id": "122",
      "name": "BMW X5",
      "poster": "https://cdn.bmwblog.com/wp-content/uploads/2018/03/Melbourne-Red-BMW-X5-M-HRE-Wheels-Image-2.jpg",
      "varients":["Base= 70.75 Lakhs","Middle= 80-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "petrol/diesel engine",
      "price": "70.75 Lakhs",
      "speed": "278 kmph",
      "mileage": "8-13 km/l combined",
      "seat":"5"
    },
    {
      "id": "123",
      "name": "BMW  X6",
      "poster": "https://gumlet.assettype.com/evoindia%2F2020-07%2F4fcf8dbf-09fc-429b-83cb-e751c3b3c60b%2FP90373801_highRes_the_new_bmw_x6_m50i_.jpg?rect=0%2C138%2C2048%2C1152&auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6",
      "varients":["Base= 1.2 crore","Middle= 3.2 crore","Top= 4-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "petrol engine",
      "speed": "250 kmph",
      "mileage": "10 km/l combined",
      "seat":"5"
    },
  
    {
      "id": "124",
      "name": "BMW X3",
      "poster": "https://www.financialexpress.com/wp-content/uploads/2022/01/BMW-X3-Facelift-3.jpg",
      "varients":["Base= 70.75 Lakhs","Middle= 85-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": " petrol/diesel engine",
     "speed": "250 kmph",
      "mileage": "13-17 km/l combined",
      "seat":"5"
    },
    {
      "id": "125",
      "name": "BMW X4",
      "poster": "https://www.financialexpress.com/wp-content/uploads/2022/02/new-bmw-x4-m40i-facelift.jpg",
      "varients":["Base= 70.75 Lakhs","Middle= 85-Lakhs","Top= 1.2-crores"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "petrol/diesel engine",
      "price": "60.75 Lakhs",
      "speed": "250 kmph",
      "mileage": "11-15 km/l combined",
      "seat":"5"
    },
  
    {
      "id": "126",
      "name": "BMW X7",
      "poster": " https://thumbor.forbes.com/thumbor/711x474/https://blogs-images.forbes.com/nargessbanks/files/2019/04/P90343695-highRes.jpg?width=960",
      "varients":["Base= 1.7 crore","Middle= 3.7 crore","Top=5.7 crore"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "petrol/diesel engine",
      "price": "1.7 crore",
      "speed": "250 kmph",
      "mileage": "11-13 km/l combined",
      "seat":"5"
    },
    {
      "id": "127",
      "name": "BMW X1",
      "poster": "https://images.hgmsites.net/lrg/2022-bmw-x1_100821675_l.jpg",
      "varients":["Base= 40 Lakhs","Middle=70 Lakhs","Top=2.7 crore"],
      "color":["White","Black","Red","Blue","Brown"],
      "type": "petrol/diesel engine",
      "price": "40 Lakhs",
      "speed": "222 kmph",
      "mileage": "15-20 km/l combined",
      "seat":"5"
    },
  
  ];
  const[east,seteast]=useState(false);
  return (
    <div>
      <div className='header2'>
  <div className='header__logo1'>
  <img className='header__logoImgw' src="https://www.bmwgroup.com/etc.clientlibs/bmwgroup/clientlibs/clientlib-site/resources/img/brands/BMW-MR_stdBM_pos_rgb_HR.png"></img>
  <img  className='header__logoImg2' src='https://listcarbrands.com/wp-content/uploads/2015/10/BMW-LOGO.png'
            alt='profile' />
  </div>
  </div>
     
      < Header2/>
      
      <h1 className="brand">BMW-SERIES  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
    <div className="tesla-list">
      {cars.map((user)=><CarData name={user.name} poster={user.poster} seat={user.seat} type={user.type} varients={user.varients} color={user.color} speed={user.speed} mileage={user.mileage} />)}
      
    </div>
    <div style={{marginTop:"50px"}}>
    <div className='hover'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src= "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/innovation/technologie_und_mobilitaet/Innovationen_Design.jpg.grp-transform/xxlarge/Innovationen_Design.jpg"></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>DESIGN</h1>
  <h4 className="test"style={{lineHeight:"30px"}} >Creating innovative experiences, aesthetic appeal and elegance or providing visual clues are just some of the areas where design contributes to innovation. This not only creates an unmistakeable look, but also reflects the company’s pioneering role.</h4></div>
  
</div>
<div className="op" style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"10px",marginTop:"10px"}}>
  <h1 >EXPERIENCE</h1>
  <h3 className="tes" style={{lineHeight:"30px"}} >As a world-class marque, there is more to Bayerische Motoren Werke Aktiengesellschaft than meets the eye.<br></br> Explore the experiences and events placing us at the summit of luxury.</h3>
  
</div>
<div className='fog' >
  <div style={{paddingLeft:"100px"}}><img style={{width:"400px",height:"300px",objectFit:"cover"}} src='https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/IXseries/Homepage_Banner_1680x756_03.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1639379272336.jpg'></img><h2 style={{textAlign:"center"}}>It's more than electric. It's a BMW.</h2></div>
  <div><img style={{width:"400px",height:"300px",objectFit:"cover"}}  src='https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Images/Topics/Excellence%20Club%20app.jpg/jcr:content/renditions/cq5dam.resized.img.890.medium.time1596105395768.jpg'></img><h2 style={{textAlign:"center"}}>Help when you need connectivity.</h2></div>
  <div><img style={{width:"400px"}} src='https://drop.ndtv.com/albums/AUTO/2019-bmw-3-series/4.jpg'></img><h2 style={{textAlign:"center"}}>Sound which has  unique frequency which is going to blast.</h2></div>
  
</div>
<div className='hover1'>
  
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>TURBO ENGINE TECHNOLOGY</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >BMW TwinPower Turbo diesel engines deliver a spirited response,impressive fuel economy and low emissions. All diesel engines boast the following BMW innovations: progressive turbocharger technology, variable turbine geometry and common-rail direct injection.</h4></div>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.northernbm.com.au/wp-content/uploads/2021/02/bmw-engine-wallpaper-bmw-cars_00429885.jpg'></img></div>
</div>
<div className='hover2'>
  <div><img  style={{ width:"800px", height:"490px",objectFit:"cover"}} src='https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/innovation/technologie_und_mobilitaet/Innovationen_Effizienz_Elektromobilitaet.jpg.grp-transform/xxlarge/Innovationen_Effizienz_Elektromobilitaet.jpg'></img></div>
  <div style={{ background: "rgb(197, 190, 190)" ,color:" rgb(41, 39, 39)",paddingTop:"50px",paddingLeft:"100px"}}>
     <h1>EFFICIENY AND ELECTRO-MOBILITY.</h1>
  <h4 className="test" style={{lineHeight:"30px"}} >Sustainability has defined the thinking and actions of the BMW Group since the early 1970s. Since then, the company has optimised countless production processes and developed innovative technologies. Key topics are efficiency and electro-mobility.</h4></div>
  
</div>
    </div>
    <div className="joy">
     
    <h1>About Bmw:</h1>
      <h2 className="tes1">BMW’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3 className="tes" style={{lineHeight:"30px"}}>BMW makes perhaps the most advanced, luxurious, and
         performance-oriented automobiles on the planet, and that status 
         is not a fluke. They've been pumping out innovative and technologically
          groundbreaking vehicles since Karl Benz introduced what's considered the 
          first petrol-powered car in 1886</h3>
            </div>
            <div className="folks">
            <Button variant="contained"  onClick={()=>seteast(!east)}  style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",maxWidth: '180px', maxHeight: '80px', minWidth: '180px', minHeight: '80px',fontSize:"19px",borderRadius:"12px"}} >PREVIEW-🎬</Button>
              
              </div>
              {east ?  <iframe width="100%" height="720" src="https://www.youtube.com/embed/BMRseEVaO-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
          <img style={{ width:"1505px", height:"750px",objectFit:"cover"}} src="https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/x-series/X4/2021/1680x756_W_o_Text.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1645528673885.jpg"></img>
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
      <Button onClick={handleOpen} style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",margin:"10px",paddingLeft:"10px",paddingRight:"10px"}}>Specs   <IconButton 
      
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
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <div>
    <h2 className='head'>{name}
    <span className="foo">
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

