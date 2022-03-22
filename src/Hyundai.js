import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee,faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

export function Hyundai() {
  const user4 = [
    {
      name: "HYUNDAI",
      poster: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Kona-Electric-2021/8178/Hyundai-Kona-Electric-2021-/1605186918196/front-left-side-47.jpg",
      series: "Hyundai  Kona Electric ",
      type: "Electric",
      price: " 23.79 Lakh",
      speed: "155 km/h",
      mileage: "452 Km(single-charge)",
      seat:"5",
    },

    {
      name: "HYUNDAI",
      poster: "https://besthqwallpapers.com/Uploads/12-2-2021/153980/thumb2-hyundai-creta-4k-road-2021-cars-crossovers.jpg",
      series: "Hyundai Creta ",
      type: "Diesel/Petrol",
      price: "17.9 Lakhs",
      speed: "195 kmph",
      mileage: "17-21 km/l combined",
      seat:"5",
    },
    {
      name: "HYUNDAI",
      poster: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Tucson/7509/1594715357564/front-left-side-47.jpg",
      series: "Hyundai Tucson",
      type: "Diesel/Petrol",
      price: "27.5 Lakhs",
      speed: "120mph",
      mileage: " 13-17 km/l combined",
      seat:"5",
    },
    {
      name: "HYUNDAI",
      poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-46979-2022nexo-1635872849.jpg?crop=0.824xw:0.925xh;0.104xw,0.0481xh&resize=640:*",
      series: "Hyundai Nexo",
      type: "Petrol",
      price: "65 Lakhs",
      speed: "179 km/h.",
      mileage: "666 kilometres (WLTP) ",
      seat:"5",
    },
    {
      name: "HYUNDAI",
      poster: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Hyundai-Casper/8573/1630559299958/front-left-side-47.jpg?tr=w-420",
      series: "Hyundai Casper",
      type: "Petrol",
      price: "6 Lakhs",
      speed: "151 kmph.",
      mileage: "13-17 km/l combined",
      seat:"5",
    },
    {
      name: "HYUNDAI",
      poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-hyundai-elantra-mmp-1-1634851642.jpg?crop=0.859xw:0.644xh;0.0929xw,0.202xh&resize=1200:*",
      series: "Hyundai Elantra ",
      type: "Diesel/Petrol",
      price: " 21.13 Lakh.",
      speed: "140mph. ",
      mileage: "14-23 km/l combined",
      seat:"5",
    },
    {
      name: "HYUNDAI",
      poster: "https://images.hgmsites.net/hug/hyundai-palisade_100800712_h.jpg",
      series: "Hyundai Palisade",
      type: "Diesel",
      price: "40 Lakhs",
      speed: "210 km/h",
      mileage: "26 MPG",
      seat:"5",
    },
    {
      name: "HYUNDAI",
      poster: "https://sparepartsnepal.com/wp-content/uploads/2020/08/Hyundai-Venue-Spare-Parts-Price-in-Nepal.png",
      series: "Hyundai Venue ",
      type: "Diesel/Petrol",
      price: " 11.87 Lakh.",
      speed: "160km/h",
      mileage: "17-23 km/l combined",
      seat:"5",
    },
  ];
  const[east,seteast]=useState(false);
  return (
    
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation} ></FontAwesomeIcon> WELCOME TO HYUNDAI WORLD <FontAwesomeIcon icon={faChargingStation} ></FontAwesomeIcon></h1>
      <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Tucson/Highlights/Hyundai-Tucson-InnerPage-Banner2-PC-new.jpg"></img>
      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='hyundai-list'>
        {user4.map((nm) => <Hyundaicar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster}seat={nm.seat} />)}
          <div className="joy">
      <h1>About Hyundai:</h1>
      <h2 className="tes1">HYUNDAI’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Hyundai Motor Company, often abbreviated to Hyundai Motors and commonly 
        known as Hyundai, is a South Korean multinational automotive manufacturer
         headquartered in Seoul, South Korea. Hyundai Motor Company was founded in 1967.</h3>
            </div>
            <div>
              <h1>🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/N3tH_3A1000" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
               <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Highlights/pc/march/Hyundai_CRETA_SUV_MainKV_PC_1860x540.jpg"></img>
      </div>
    </div>
  );
}
function Hyundaicar({ name, series, price, speed, mileage, type, poster,seat }) {
  
  const ji={textAlign:'center'}
  const [show,setShow]=useState(false);
  return (
    <div className='hyundai'>
      <img src={poster} alt="img" className='hyundai-poster'></img>
      <h3 className='styles'>{series}
      <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={()=>setShow(!show)}
      >
  <ExpandCircleDownIcon/>
</IconButton>
      </h3>
       {show ? <h3 style={ji}>Car-series: {series}</h3> :""}
       {show ? <h3 style={ji}><FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>: {type}</h3> :""}
       {show ? <h3 style={ji}><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>: {price}</h3> :""}
       {show ? <h3 style={ji}><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon>: {speed}</h3> :""}
       {show ? <h3 style={ji}><FontAwesomeIcon icon={faGaugeSimpleHigh}></FontAwesomeIcon>:{mileage}</h3> :""}
       {show ?  <h3 style={ji}><AirlineSeatReclineExtraIcon/>:{seat}</h3>:""} 
    </div>
  );
}