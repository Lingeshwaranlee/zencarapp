import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee, faGaugeSimpleHigh} from "@fortawesome/free-solid-svg-icons";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

export function Jaguar() {
  const user = [
    {
      name: "JAGUAR",
      poster: "https://cdni.autocarindia.com/ExtraImages/20210621055521_Jaguar_F_PACE_SVR.jpg",
      series: "Jaguar F-Pace",
      type: "DIESEL/PETROL",
      price: "82 Lakhs",
      speed: "210 kmph",
      mileage: " 19.3 kmpl",
      seat:"5",
    },
    {
      name: "JAGUAR",
      poster: "https://cdn.motor1.com/images/mgl/ArYx6/s1/2019-jaguar-i-pace.jpg",
      series: "Jaguar I-PACE",
      type: "ELECTRIC",
      price: "1.12 Crore",
      speed: "200 kmph",
      mileage: "470 km(single-charge)",
      seat:"5",
    },
    {
      name: "JAGUAR",
      poster: "https://di-uploads-pod6.dealerinspire.com/jaguardarien/uploads/2018/06/2019-jaguar-f-type-coupe-f-type-r-in-yulong-white-with-silver-weave-carbon-fiber-packages.jpg",
      series: "Jaguar XF",
      type: "DIESEL/PETROL",
      price: "76 Lakhs",
      speed: "235 kmph",
      mileage: " (13.1 to 19.3 Km/l)",
      seat:"5",
    },
    {
      name: "JAGUAR",
      poster: "https://www.companycartoday.co.uk/wp-content/uploads/2019/05/XE-D180-Eiger-Grey_-123-1.jpg",
      series: "Jaguar XE",
      type: "Petrol",
      price: "48.50 Lakhs",
      speed: "250 kmph",
      mileage: "(13.5 to 13.6 kmpl.)",
      seat:"5",
    },

   
    {
      name: "JAGUAR",
      poster: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/10_ftype_refresh_0.jpg?itok=cHufxa6g",
      series: "Jaguar F-TYPE",
      type: "Petrol",
      price: "2.61 crore",
      speed: "250 kmph",
      mileage: "(10.9 to 15.3 Km/l)",
      seat:"2",
    },
    
  ];
  const[east,seteast]=useState(false);
  return (
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon> WELCOME TO JAGUAR WORLD <FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>

      <img src="https://cdn.motor1.com/images/mgl/q1ZM1/s1/2019-jaguar-f-pace-svr-first-drive.jpg"></img>

      <h1 className="brand">BRANDS OF CARS AVAILABLE  <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='jaguar-list'>
        {user.map((nm) => <Jaguarcar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster} seat={nm.seat}/>)}
        <div className="joy">
          <h1>About Jaguar:</h1>
          <h2 className="tes1">Jaguar’s mission is to accelerate the world’s transition to sustainable energy.</h2>
          <h3>Jaguar Cars was the company that was responsible for the production of
             Jaguar cars until its operations were fully merged with those of Land Rover 
             to form Jaguar Land Rover on 1 January 2013.Jaguar is the luxury vehicle
              brand of Jaguar Land Rover, a British multinational car manufacturer with 
              its headquarters in Whitley, Coventry, England.</h3>
        </div>
        <div>
              <h1 className="tes2">🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/bO08STHIhgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
        <img src="https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/40c263fc-b4c2-4a59-a6fe-d3c361b26c19/Jaguar%20F-Pace%20(6).jpeg"></img>

      </div>
    </div>
  );
}
function Jaguarcar({ name, series, price, speed, mileage, type, poster ,seat}) {

  const ji = { textAlign: 'center' };
  const [show,setShow]=useState(false);
  return (
    <div className='jaguar'>


      <img src={poster} alt="img" className='jaguar-poster'></img>
      <h3 className='styles'><b>{series}</b>
      <IconButton 
      color="primary" 
      aria-label="add to shopping cart"
      onClick={()=>setShow(!show)}
      >
  <ExpandCircleDownIcon/>
</IconButton>
      </h3>
      {show ?  <h3 style={ji}>Car-series: {series}</h3> :""}
      {show ?  <h3 style={ji}><FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>: {type}</h3> :""}
      {show ?  <h3 style={ji}><FontAwesomeIcon icon={faIndianRupee}></FontAwesomeIcon>:{price}</h3> :""}
      {show ?  <h3 style={ji}><FontAwesomeIcon icon={faGaugeHigh}></FontAwesomeIcon>: {speed}</h3> :""}
      {show ?  <h3 style={ji}><FontAwesomeIcon icon={faGaugeSimpleHigh}></FontAwesomeIcon>:{mileage}</h3> :""}
      {show ?  <h3 style={ji}><AirlineSeatReclineExtraIcon/>:{seat}</h3>:""} 

    </div>
  );
}

