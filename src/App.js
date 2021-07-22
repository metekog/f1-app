import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import AllDrivers from "./components/Drivers/AllDrivers";
import ConstructorStandings from "./components/Constructor/ConstructorStandings";
import Constructors from "./components/Constructor/Constructors";
import DriverStandings from "./components/Drivers/DriverStandings";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
       {/*  <DriverStandings /> */}
      </div>
    </div>
  );
};

export default App;
