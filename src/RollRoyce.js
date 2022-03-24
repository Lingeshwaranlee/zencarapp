import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee, faGaugeSimpleHigh} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

export function RollRoyce() {
  const user = [
    {
      name: "ROLLS-ROYCE",
      poster: "https://www.wallpaperup.com/uploads/wallpapers/2017/10/23/1129940/de7f2008221d92f2f63ecfa1037e4675-700.jpg",
      series: "Rolls-Royce Ghost",
      type: "Petrol",
      price: "7.95 crore",
      speed: "155 miles per hour",
      mileage: " 6.33 kmpl",
      seat:"4",
    },
    {
      name: "ROLLS-ROYCE",
      poster: "https://imageio.forbes.com/specials-images/imageserve/617a778d66fbfc6c231e3a1a/The-new-Rolls-Royce-Ghost-Black-Badge/960x0.jpg?fit=bounds&format=jpg&width=960",
      series: "Rolls-Royce Phantom",
      type: "Petrol",
      price: "10.48 Crore",
      speed: "155 mph",
      mileage: "9.8 kmpl",
      seat:"4",
    },
   
    {
      name: "ROLLS-ROYCE",
      poster: "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/4-0-bespoke/components/D_COLLECTION_OFFGRID_CAROUSEL_LSWRAITH.jpg/jcr:content/renditions/cq5dam.web.1920.webp",
      series: "Rolls-Royce Cullinan",
      type: "Petrol",
      price: "6.95 crore",
      speed: "155 miles per hour",
      mileage: "9.5 kmpl",
      seat:"4",
    },
   
    {
      name: "ROLLS-ROYCE",
      poster: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F04%2Fspofec-overdose-rolls-royce-black-badge-wraith-wide-body-kit-tuned-v12-custom-rare-limited-edition-novitec-0.jpg?w=960&cbr=1&q=90&fit=max",
      series: "Rolls-Royce Wraith",
      type: "Petrol",
      price: "7.21 Crore",
      speed: "155 miles per hour",
      mileage: "10.2 kmpl",
      seat:"4",
    },
   
    {
      name: "ROLLS-ROYCE",
      poster: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Fmansory-rolls-royce-dawn-silver-bullet-soft-kit-custom-tuned-conversion-limited-edition-1.jpg?q=75&w=800&cbr=1&fit=max",
      series: "Rolls-Royce Dawn",
      type: "Petrol",
      price: "7.85 Crore",
      speed: "155 miles per hour",
      mileage: "9.8 kmpl",
      seat:"2",
    },
   
   
  ];
  
  const[east,seteast]=useState(false);
  return (
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon> WELCOME TO ROLLS-ROYCE WORLD <FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>
      
      <img src='https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/3-7-5-bb-cullinan/components/rolls-royce-black-badge-cullinan-product-page-carousel-1-d.jpg/jcr:content/renditions/cq5dam.web.1920.webp'></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='tesla-list'>
        {user.map((nm) => <RollRoycecar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster} seat={nm.seat} />)}
          <div className="joy">
      <h1>About RollRoyce:</h1>
      <h2 className="tes1">RollRoyce’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Rolls-Royce Holdings plc is a British multinational aerospace and defence company
         incorporated in February 2011. The company owns Rolls-Royce, a business established 
         in 1904 which today designs, manufactures and distributes power systems for aviation
          and other industries</h3>
            </div>
            <div>
              <h1 className="tes2">🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="701" src="https://www.youtube.com/embed/_JP0fl3S1uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
          <img src="https://www.motortrend.com/uploads/sites/5/2020/08/2021_Rolls-Royce_Ghost-3.jpg"></img>
      </div>
    </div>
  );
}
function RollRoycecar({ name, series, price, speed, mileage, type, poster,seat }) {
  
  const ji={textAlign:'center'}
  const [show,setShow]=useState(false);
  return (
    <div className='tesla'>


    <img src={poster} alt="img" className='tesla-poster'></img>
    <h3 className='styles'>{series}<IconButton 
    color="primary" 
    aria-label="add to shopping cart"
    onClick={()=>setShow(!show)}
    >
<ExpandCircleDownIcon />
</IconButton></h3>
{show ?  <h3 style={ji}>Car-series: {series}</h3>:""}
{show ?  <h3 style={ji}><FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>: {type}</h3> :""}  
{show ?  <h3 style={ji}><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>:{price}</h3> :""}
{show ?   <h3 style={ji}><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon>: {speed}</h3>:""}
{show ?  <h3 style={ji}><FontAwesomeIcon icon={faGaugeSimpleHigh}></FontAwesomeIcon>:{mileage}</h3>:""}
{show ?  <h3 style={ji}><AirlineSeatReclineExtraIcon/>:{seat}</h3>:""} 
  
    

  </div>
  );
}
