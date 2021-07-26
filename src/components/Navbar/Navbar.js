import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={"images/logo/logo-2.png"} alt="" />
        </div>
      </Link>
      
    </div>
  );
}
