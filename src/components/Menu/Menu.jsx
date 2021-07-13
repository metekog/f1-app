import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a>Drivers</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>Standings</a>
        </li>
      </ul>
    </div>
  );
}
