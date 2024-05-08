
import { Title } from "./App";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {Title()}

      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;