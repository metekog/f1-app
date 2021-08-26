import { useState } from "react";
import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import Menu from "./components/Menu/Menu";
import AllDrivers from "./components/Drivers/AllDrivers";
import { Switch, Route, Redirect } from "react-router-dom";
import ConstructorStandings from "./components/Constructor/ConstructorStandings";
import Layout from "./components/Layout/Layout";
import DriverStandings from "./components/Drivers/DriverStandings";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Switch>
        <div className="sections">
          <Route exact path="/" component={Layout} />
          <Route path="/all-drivers" component={AllDrivers} />
          <Route
            path="/constructors-standings"
            component={ConstructorStandings}
          />
          <Route path="/drivers-standings" component={DriverStandings} />
        </div>
      </Switch>
    </div>
  );
};

export default App;
