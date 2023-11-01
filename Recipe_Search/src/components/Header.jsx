import NavBar from "./NavBar";
import headerImage from '../assets/dish2.png'

export default function Header() {
  return (
    <>
      <header className="header">
        <NavBar/>   
        <div className="header-img">

        </div>
        {/* <img src={headerImage} alt="" /> */}
      </header>
    </>
  );
}
