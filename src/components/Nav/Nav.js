import { NavLink } from "react-router-dom";
import './Nav.scss';

function Nav() {
  return (
    <div className="Nav">
      <NavLink 
        to="/landingPage" 
        className="Nav__link"
        activeClassName="Nav__link--active"
      >
        Landing Page
      </NavLink>
      <NavLink 
        to="/mobileDemo"
        className="Nav__link"
        activeClassName="Nav__link--active"
      >
        Mobile Demo
      </NavLink>
    </div>
  );
}

export default Nav;
