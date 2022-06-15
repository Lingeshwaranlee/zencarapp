import {SiTesla,SiRollsroyce,SiBmw,SiMercedes,SiJaguar,SiTata,SiHyundai} from "react-icons/si";
export function Header() {
  return (
    <div>
     <div className='headerBlock'>
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText'>
          <h1>Tesla <SiTesla style={{fontSize: "24px",}}/></h1>
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
