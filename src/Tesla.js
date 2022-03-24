import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee, faGaugeSimpleHigh,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

export function Tesla() {
  const user = [
    {
      name: "TESLA",
      poster: "https://i.insider.com/5a872a6cd030721b008b4727?width=1136&format=jpeg",
      series: "Model 3",
      type: "Electrical",
      price: "60 Lakhs",
      speed: "162 mph",
      mileage: "498 km(single-charge)",
      seat:"5",
    },
    {
      name: "TESLA",
      poster: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg",
      series: "Model S",
      type: "Electrical",
      price: "1.5 croces",
      speed: "155 mph",
      mileage: "420 km(single-charge)",
      seat:"5",
    },
    {
      name: "TESLA",
      poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-x-1636042860.jpg",
      series: "Model X",
      type: "Electrical",
      price: "2 crores",
      speed: "155 mph",
      mileage: "547 km(single-charge)",
      seat:"5",
    },
    {
      name: "TESLA",
      poster: "https://tesla-cdn.thron.com/delivery/public/image/tesla/c7359a76-05c0-4b00-a5ac-3ad005acdc5f/bvlatuR/std/0x0/Range_Desktop-poster",
      series: "Model Y",
      type: "Electrical",
      price: "70 Lakhs",
      speed: "155 mph",
      mileage: "520 km(single-charge)",
      seat:"5",
    }
  ];
  
  const[east,seteast]=useState(false);
  return (
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon> WELCOME TO TESLA WORLD <FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>
      
      <img src='https://wegoelectric.net/wp-content/uploads/2021/08/model-3-tesla.jpeg'></img>
      
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='tesla-list'>
        {user.map((nm) => <Teslacar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster} seat={nm.seat} />)}
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
            <div>
              <h1 className="tes2">🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ?  <iframe width="100%" height="720" src="https://www.youtube.com/embed/jWreyC2l-dw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
          <img src="https://www.topgear.com/sites/default/files/images/news-article/2017/06/1a25df25e98a5d9f2c6a61a951de3498/scenic_mountain_1.jpg"></img>
      </div>
    </div>
  );
}
function Teslacar({ name, series, price, speed, mileage, type, poster,seat }) {
  
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
