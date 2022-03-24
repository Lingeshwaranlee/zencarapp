import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faChargingStation,  faGasPump, faGaugeHigh, faIndianRupee,faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Button from '@mui/material/Button';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

export function Benz() {
  const user2 = [
    {
      name: "BMW",
      poster: "https://www.mercedes-benz.co.in/passengercars/mercedes-benz-cars/models/eqb/suv-x243/pad/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210823082518.jpeg",
      series: "Mercedes-Benz EQB",
      type: "Electrical",
      price: "70 Lakhs",
      speed: "180 km/h",
      mileage: "471 Km(single-charge)",
      seat:"7",
    },
    {
      name: "BMW",
      poster: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-mercedes-benz-eqs-138-1627066895.jpg?crop=0.651xw:0.578xh;0.207xw,0.245xh&resize=1200:*",
      series: "Mercedes-Benz EQS",
      type: "Electric sedan",
      price: "1.75 crore",
      speed: "200 km/h",
      mileage: "770km(single-charge)",
      seat:"5",
    },
    {
      name: "BMW",
      poster: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-GT/7842/1609141333284/front-left-side-47.jpg",
      series: "Mercedes-Benz AMG GT",
      type: "Petrol",
      price: "2.64 crore",
      speed: "312 km/h",
      mileage: "8-11 km/l combined",
      seat:"2",
    },
    {
      name: "BMW",
      poster: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/108113/exterior-left-front-three-quarter.jpeg?isig=0&q=75",
      series: "Mercedes-Benz EQE",
      type: "Electrical",
      price: "70 lakhs",
      speed: "137 km/h",
      mileage: "660 km(single-charge)",
      seat:"5",
    },
    {
      name: "BMW",
      poster: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200527021853_Mercedes-E-Class_Cabriolet.jpg",
      series: "Mercedes-Benz E-Class Cabriolet Facelift",
      type: "Petrol",
      price: "84 Lakhs",
      speed: "155 km/h",
      mileage: "10 kmpl", 
      seat:"5",
    },

    {
      name: "BMW",
      poster: "https://www.mercedes-benz.com/en/vehicles/passenger-cars/gls/mercedes-amg-gls-63-4matic/_jcr_content/image/MQ6-12-image-20191120194413/00-mercedes-benz-2020-mercedes-amg-gls-63-4matic-x167-polar-white-2560x1440.jpeg",
      series: "Mercedes-Benz GLS 63",
      type: "petrol",
      price: "1.92 crore",
      speed: "174 km/h",
      mileage: "11.5kmpl",
      seat:"6",
    },
  ];
  const[east,seteast]=useState(false);
  return (
    <div>
      <h1 className='world'><FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon>WELCOME TO MERCEDES BENZ WORLD<FontAwesomeIcon icon={faChargingStation}></FontAwesomeIcon></h1>
      <img src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/glc/coupe/class-page/series/2022-GLC-COUPE-CH-1-1-DR.jpg"></img>
      <h1 className="brand">BRANDS OF CARS AVAILABLE <FontAwesomeIcon icon={faCar}></FontAwesomeIcon></h1>
      <div className='benz-list'>
        {user2.map((nm) => <Benzcar name={nm.name} series={nm.series} price={nm.price}
          speed={nm.speed} mileage={nm.mileage} type={nm.type} poster={nm.poster} seat={nm.seat} />)}
          <div className="joy">
      <h1>About Bmw:</h1>
      <h2 className="tes1">BMW’s mission is to accelerate the world’s transition to sustainable energy.</h2>
      <h3>BMW serves purely as a status symbol for some, while for others 
        it's a belief in the mantra “The Ultimate Driving Machine” and philosophy 
        of high revving engines. With that in mind, some are not only attracted to the
         BMW brand just because they produce great cars, but also because of their way of doing things..</h3>
            </div>
            <div>
              <h1 className="tes2">🎉🎉GET READY FOLKS -- <Button variant="contained"  onClick={()=>seteast(!east)}>TRAILER-CLICK ME</Button>🎉🎉</h1>
              
              </div>
              {east ? <iframe width="100%" height="720" src="https://www.youtube.com/embed/csAXruiBLTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> :""}
              <img src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my22/glc/coupe/class-page/series/2022-GLC-COUPE-HERO-DR.jpg"></img>
      </div>
    </div>
  );
}
function Benzcar({ name, series, price, speed, mileage, type, poster,seat }) {
  
  const ji={textAlign:'center'}
  const [show,setShow]=useState(false);
  return (
    <div className='benz'>
      <img src={poster} alt="img" className='benz-poster'></img>
      <h3 className='styles'> {series}
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
