import './Booking.css'
import PaidIcon from '@mui/icons-material/Paid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import {SiGooglepay,SiPaytm,SiRazorpay,SiPhonepe} from "react-icons/si";
import {FaPaypal,FaRupeeSign} from "react-icons/fa";
export function Booking() {
  const history =useHistory(); 
  return (
    <div>
  <div className='book'>
      <img  className='bookImg' src="https://www.smallbusinessrainmaker.com/hubfs/how-to-use-online-booking-systems-to-grow-sales1200.png"></img>
      <img  className='bookImg' src="https://thumbs.dreamstime.com/b/line-booking-line-ticket-book-flight-buying-tickets-online-travel-concept-flat-vector-illustration-modern-design-line-139334195.jpg"></img>
      </div>
      <div className='order'>
      <h1>YOUR BOOKING HAS BEEN CONFIRMED</h1>
      <h3>YOUR CAR WILL BE DELEIVERED SOON!!!</h3>
      <h4>MAKE A PAYMENT THROUGH</h4>
      </div>
      
      <div className='button' style={{marginLeft:"480px"}} >
      <a href='https://pay.google.com/' target="_blank" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiGooglepay style={{fontSize:"40px"}}/></a>
      <a href='https://paytm.com/' target="_blank" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiPaytm style={{fontSize:"40px"}}/></a>
      <a href='https://razorpay.com/' target="_blank" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiRazorpay style={{fontSize:"40px"}}/></a>
      <a href='https://www.paypal.com/in/home' target="_blank" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><FaPaypal style={{fontSize:"40px"}}/></a>
     <a href='https://www.phonepe.com/' target="_blank" style={{ background: 'rgb(41, 39, 39)' ,color:"rgb(185, 183, 183)",padding:"20px","text-decoration" : "none","borderRadius":"40px"}}><SiPhonepe style={{fontSize:"40px"}}/></a>
     
     
      </div>
      </div>
  );
}

