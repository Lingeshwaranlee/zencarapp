import {SiTesla,SiRollsroyce,SiBmw,SiMercedes,SiJaguar,SiTata,SiHyundai} from "react-icons/si";
//header4 component
export function Header4() {
  return (
    <div>
      <div className='headerBlock4'>
      <div className='headerBlock__info'>
        <div className='headerBlock__infoText2'>
          <h1>JAGUAR <SiJaguar style={{fontSize: "50px"}}/></h1>
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
