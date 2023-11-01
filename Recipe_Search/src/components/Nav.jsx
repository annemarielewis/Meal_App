import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function Nav() {
    
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink active href="#">
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/countries">Counteries</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/categories">Categories</Link>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
