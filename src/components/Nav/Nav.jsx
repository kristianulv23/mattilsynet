
import { Link } from "react-router-dom";

import searchLogo from "../../resources/search.svg"
import assignmentLogo from "../../resources/assignment.svg";

const Nav = () => {
  return (
    <nav className="nav">
      <NavList>
        <NavItem to="/" logo={assignmentLogo}/>
        <NavItem to="/dashboard" logo={searchLogo} />
      </NavList>
    </nav>
  )
}

const NavList = ({children}) => {
  return (
    <ul className="nav__list">
      {children}
    </ul>
  )
}

const NavItem = ({to, logo}) => {
  return (
    <li className="nav__item">
        <Link className="nav__link" to={to}>
          <img className="nav__icon" src={logo} alt="icon" />
        </Link>
      </li>
  )
}

export default Nav;
