import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChargingStation,faCar, faGasPump, faGaugeHigh, faIndianRupee,faGaugeSimpleHigh} from "@fortawesome/free-solid-svg-icons";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';


export function Tata() {
  const user3 = [
    {
      name: "TATA",
      poster: "https://cars.tatamotors.com/images/punch/tata-punch-features-m-banner.jpg",
      series: "Tata Punch",
      type: "Petrol",
      price: "9.18 Lakh",
      speed: "	150 kmph",
      mileage: "19 km/l combined",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://cdni.autocarindia.com/ExtraImages/20200724042713_Tata-Nexon-FL-front-tracking.jpg",
      series: "Tata Nexon",
      type: "Diesel/Petrol",
      price: " 13.73 Lakh",
      speed: "180 kph",
      mileage: "16-22 km/l combined",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20201007020644_harrier-dark.jpg&w=700&q=90&c=1",
      series: "Tata Harrier",
      type: "Petrol/CNG",
      price: "21.70 Lakh",
      speed: "180 kmph",
      mileage: "15-16 km/l combined",
      seat:"6",
    },
    {
      name: "TATA",
      poster: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/57613/left-front-three-quarter0.jpeg?wm=0",
      series: "Tata Tiago",
      type: "Diesel/Petrol",
      price: "7.64 Lakh",
      speed: "165 kmph",
      mileage: "20 km/l combined",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://cars.tatamotors.com/images/altroz-gallery-mobile-banner-overlay.jpg",
      series: "Tata Altroz",
      type: "Diesel/Petrol",
      price: " 9.69 Lakh",
      speed: "165+ kmph",
      mileage: "19-25 km/l combined",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tata-Tigor/6639/front-right-view-120.jpg",
      series: "Tata Tigor",
      type: "Petrol/CNG",
      price: "8.41 Lakh",
      speed: "164 kmph",
      mileage: "19 km/l combined",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://www.eaglesvine.com/wp-content/uploads/2021/02/New-Tata-Safari-launched-in-India-at-an-introductory-starting.jpg",
      series: "Tata Safari",
      type: "Diesel",
      price: "23.29 Lakh",
      speed: "180 kmph",
      mileage: "14-16 km/l combined",
      seat:"6",
    },
    {
      name: "TATA",
      poster: "https://images.news18.com/ibnlive/uploads/2021/08/1628423383_tata-tiago-nrg-3.jpg?impolicy=website&width=0&height=0",
      series: "Tata Tiago NRG",
      type: "Petrol",
      price: " 7.17 Lakh",
      speed: "150 kmph",
      mileage: "20 km/l combined",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/7042/1576845369560/front-left-side-47.jpg",
      series: "Tata Nexon EV",
      type: "Electric",
      price: "13.14 Lakh",
      speed: "120kmph",
      mileage: "312 km(single-charge)",
      seat:"5",
    },
    {
      name: "TATA",
      poster: "https://c.ndtvimg.com/2021-08/lfh1n2po_tata-tigor-ev_625x300_25_August_21.jpg",
      series: "Tata Tigor EV",
      type: "Electric",
      price: "13.14 Lakh",
      speed: "80kph",
      mileage: "306km(single-charge)",
      seat:"5",
    },
  ];
  const[east,seteast]=useState(false);
  
  return (
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon> WELCOME TO TATA WORLD <FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>
      
      <img src="https://cars.tatamotors.com/images/kaziranga/punch-kaziranga-desktop-banner-1.png"></img>
     
      <h1 className="brand">BRANDS OF CARS AVAILABLE<FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='tata-list'>
        {user3.map((nm) => <Tatacar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster} seat={nm.seat} />)}
          <div className="joy">
      <h1>About Tata:</h1>
      <h2 className="tes1">TATA’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>Tata Group is an Indian multinational conglomerate headquartered in Mumbai.
         Founded in 1868 by Jamshedji Tata, the group gained international recognition
          after purchasing several global companies. It is one of the biggest and oldest
           industrial groups in India.</h3>
            </div>
            <div>
              <h1 className="tes2">🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/Rag287hQj28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  :""}
            
                 <img src="https://cars.tatamotors.com/images/kaziranga/harrier-kaziranga-desktop-banner-1.png"></img>
      </div>
     
    </div>
  );
}
function Tatacar({ name, series, price, speed, mileage, type, poster,seat}) {
  
  const ji={textAlign:'center'}
  const [show,setShow]=useState(false);
  return (
    <div className='tata'>
      <img src={poster} alt="img" className='tata-poster'></img>
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

