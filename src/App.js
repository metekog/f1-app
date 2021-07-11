import { useState } from "react";
import "./app.scss";
import Menu from "./components/Menu/Menu";
import Topbar from "./components/Topbar/Topbar";
import Drivers from "./components/Drivers/Drivers";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Drivers />
    </div>
  );
};

export default App;
