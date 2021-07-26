import { Link } from "react-router-dom";
import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            {menuOpen ? (
              <Link to="/">
                <img src=" /images/logo/logo-red.png" alt=""></img>
              </Link>
            ) : (
              <Link to="/">
                <img src="/images/logo/logo.png" alt=""></img>
              </Link>
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
