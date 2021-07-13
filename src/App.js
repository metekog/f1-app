import "./app.scss";
import Drivers from "./components/Drivers/Drivers";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Drivers />
      </div>
    </div>
  );
};

export default App;
