
import { Title } from "./App";
import { Link } from "react-router-dom";
import { useContext  } from "react";
import UserContext from "./utils/User_Context";
import { useSelector } from "react-redux";
import Store from "./utils/store";
// import Store from "./utils/store";

const Header = () => {

  const {user}=useContext(UserContext);
  const cartItems=useSelector(Store=>Store.cart.items)
  return (
    <div className="header">
      {Title()}

      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>  
          <Link to ="/instamart"><li>  InstaMart</li></Link>
          {/* <Link ><li>  cart - {cartItems.length} items</li></Link> */}
          <Link to="/cart">
          <li>Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <span className="font-bold p-5 m-3 text-brown">{user.name}</span>
    </div>
  );
}
export default Header;