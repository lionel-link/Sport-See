import './MenuPrincipal.css';
import Logo from './../assets/img/logo.png';

function MenuPrincipal() {
  return (
    <div className="MenuPrincipal">
      <ul className="MenuPrincipal__menu">
        <li className="MenuPrincipal__menuItem">
          <a href="/" className="MenuPrincipal__menuItem__link">
            <img className="MenuPrincipal__menuItem__logo" src={Logo} alt="" />
          </a>
        </li>
        <li className="MenuPrincipal__menuItem">
          <a href="/" className="MenuPrincipal__menuItem__link">
            Accueil
          </a>
        </li>
        <li className="MenuPrincipal__menuItem">
          <a href="/" className="MenuPrincipal__menuItem__link">
            Profil
          </a>
        </li>
        <li className="MenuPrincipal__menuItem">
          <a href="/" className="MenuPrincipal__menuItem__link">
            Réglages
          </a>
        </li>
        <li className="MenuPrincipal__menuItem">
          <a href="/" className="MenuPrincipal__menuItem__link">
            Communauté
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuPrincipal;
