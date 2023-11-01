import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function NavBar() {
    
  return (
    <div>
      {/* <Nav>
        <NavItem>
          <NavLink active href="#">
            <Link to="/">Home</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/countries">Countries</Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <Link to="/categories">Categories</Link>
          </NavLink>
        </NavItem>
      </Nav> */}
      <Link to="/"> Home </Link>
      <Link to="/countries"> Countries </Link>
      <Link to="/categories"> Categories </Link>
    </div>
  );
}
