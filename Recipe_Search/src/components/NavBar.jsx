import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavBar() {
  return (
    <div className='nav'>
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
      <Link to="/" className='link'> Home </Link>
      <Link to="/countries" className='link'> Browse by Country </Link>
      <Link to="/categories" className='link'> Browse by Category </Link>
    </div>
  );
}
