import {SiTesla,SiRollsroyce,SiBmw,SiMercedes,SiJaguar,SiTata,SiHyundai} from "react-icons/si";
//header0 component
export function Header0() {
  return (
    <div>
      <div className='headerBlock0'>
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText3'>
          <h1>HYUNDAI  <SiHyundai style={{fontSize: "35px"}}/></h1>
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
