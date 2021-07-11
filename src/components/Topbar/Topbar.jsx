import "./topbar.scss";
import logo from "../../images/logo-green.png";
import logoWhite from "../../images/logo-2.png";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            {menuOpen ? (
              <img src={logoWhite} alt=""></img>
            ) : (
              <img src={logo} alt=""></img>
            )}
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
