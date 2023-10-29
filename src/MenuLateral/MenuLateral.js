import './MenuLateral.css';
import Yoga from './../assets/img/yoga.png'
import Natation from './../assets/img/natation.png'
import Velo from './../assets/img/velo.png'
import Sport from './../assets/img/sport.png'

function MenuLateral() {
  return (
    <div className="MenuLateral">
      <ul className="MenuLateral__menu">
        <li className="MenuLateral__menuItem">
          <a href="/" className="MenuLateral__menuItem__link">
            <img className="MenuLateral__menuItem__logo" src={Yoga} alt="" />
          </a>
        </li>
        <li className="MenuLateral__menuItem">
          <a href="/" className="MenuLateral__menuItem__link">
            <img className="MenuLateral__menuItem__logo" src={Natation} alt="" />
          </a>
        </li>
        <li className="MenuLateral__menuItem">
          <a href="/" className="MenuLateral__menuItem__link">
            <img className="MenuLateral__menuItem__logo" src={Velo} alt="" />
          </a>
        </li>
        <li className="MenuLateral__menuItem">
          <a href="/" className="MenuLateral__menuItem__link">
            <img className="MenuLateral__menuItem__logo" src={Sport} alt="" />
          </a>
        </li>
      </ul>
      <div className="MenuLateral__copyright">Copiryght, SportSee 2020</div>
    </div>
  );
}

export default MenuLateral;
