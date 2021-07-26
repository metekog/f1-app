import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import AllDrivers from "./components/Drivers/AllDrivers";
import { Switch, Route } from "react-router-dom";
import ConstructorStandings from "./components/Constructor/ConstructorStandings";
import LastRace from "./components/LastRace/LastRace";
import Layout from "./components/Layout/Layout";
import DriverFive from "./components/Drivers/DriverFive";
import DriverStandings from "./components/Drivers/DriverStandings";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/all-drivers" component={AllDrivers} />
        <Route
          path="/constructors-standings"
          component={ConstructorStandings}
        />
        <Route path="/drivers-standings" component={DriverStandings} />
      </Switch>
      {/* <DriverFive /> */}
      {/*  <LastRace /> */}
    </div>
  );
};

export default App;
