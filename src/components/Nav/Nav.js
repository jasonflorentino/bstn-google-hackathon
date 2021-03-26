import { NavLink } from "react-router-dom";
import './Nav.scss';
import pulse from '../../assets/Group (1).svg'

function Nav() {
  return (
    <section className="nav">
    <div className='nav__icon'>
      <h5 className='nav__title'>Google Pulse</h5>
      <img src={pulse} />
    </div>
    <div className='nav__links' >
      <NavLink 
        to="/landingPage" 
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Landing Page
      </NavLink>
      <NavLink 
        to="/mobileDemo"
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Mobile Demo
      </NavLink>
    </div>
    </section>
  );
}

export default Nav;
