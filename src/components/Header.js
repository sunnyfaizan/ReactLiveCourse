import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logonew.jpg";
import user from "../../assets/user.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="navbar">
      <a href="/">
        <img className="navbarLogo" src={logo} />
      </a>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li>Cart</li>
        <li>
          {isLoggedIn ? (
            <button className="btn btn-primary" onClick={() => (setIsLoggedIn(false))}>Login</button>
          ) : (
            <button className="btn btn-primary" onClick={() => (setIsLoggedIn(true))}>Logout</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
