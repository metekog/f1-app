import "./app.scss";
import ConstructorStandings from "./components/Constructor/ConstructorStandings";
import Navbar from "./components/Navbar/Navbar";
import Seasons from "./components/Drivers/Seasons";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        {/* <Seasons /> */}
        <ConstructorStandings />
      </div>
    </div>
  );
};

export default App;
