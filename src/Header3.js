import {SiTesla,SiRollsroyce,SiBmw,SiMercedes,SiJaguar,SiTata,SiHyundai} from "react-icons/si";
export function Header3() {
  return (
    <div>
       <div className='headerBlock3'>
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText3'>
          <h1>MERCEDES BENZ <SiMercedes style={{fontSize: "27px"}}/></h1>
          <h4>
            Order Online for <span>Touchless Delivery</span>
          </h4>
        </div>
        <div className='headerBlock__actions'>
          <button className='headerBlock__buttonPrimary'>custom order</button>
          <button className='headerBlock__buttonSecondary'>
            existing inventory
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}
