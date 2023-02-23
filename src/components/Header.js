import logo from "../../assets/logonew.jpg";
import user from "../../assets/user.png";

const Header = () => {
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
                  </ul>
           </div>
    )
}

export default Header;