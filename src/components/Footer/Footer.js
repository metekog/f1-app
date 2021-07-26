import { Link } from "react-router-dom";
import "./footer.scss";

export default function Navbar() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="left">
          <a href="https://www.github.com/metekog" target="_blank">
            Github
          </a>
        </div>

        <div className="right">
          <a href="https://ergast.com/mrd/" target="_blank">
            Thanks for Ergast!
          </a>
        </div>
      </div>
    </div>
  );
}
