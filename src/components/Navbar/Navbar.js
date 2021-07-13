import "./navbar.scss";
import logo from "../../images/logo-2.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
