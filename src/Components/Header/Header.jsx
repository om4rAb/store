import { Link } from "react-router-dom";
import "./HeaderStyle.css"
import { CiShoppingCart } from "react-icons/ci";


export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-div">
          <h2>MATALAN</h2>
          <Link>MEN</Link>
          <Link>WOMEN</Link>
          <Link>KIDS</Link>
          <Link>CONTACT</Link>
          <Link>ABOUT US</Link>
        </div>
        
        <div className="right-div">
          <CiShoppingCart size={35} />
          <Link>SIGN IN</Link>
        </div>

      </nav>

    </header>
  );
}
