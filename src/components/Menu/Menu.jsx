import { Link } from "react-router-dom";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="drivers-standings">Drivers Standings</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="constructors-standings">Constructors Standings</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="constructors-standings">Constructors Standings</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="constructors-standings">Constructors Standings</Link>
        </li>
      </ul>
    </div>
  );
}
