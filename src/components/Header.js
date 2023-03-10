import { useState } from "react";
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
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <li>
          {isLoggedIn ? (
            <button onClick={() => (setIsLoggedIn(false))}>Login</button>
          ) : (
            <button onClick={() => (setIsLoggedIn(true))}>Logout</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
