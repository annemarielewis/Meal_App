import NavBar from "./NavBar";
import Search from "./Search";
import headerImage from '../assets/dish2.png'

export default function Header() {
  return (
    <>
      <header className="header">
        <NavBar/>   
        <div className="search-bar">
          <Search></Search>
        </div>
        {/* <img src={headerImage} alt="" /> */}
      </header>
    </>
  );
}
