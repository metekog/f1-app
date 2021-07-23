import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import AllDrivers from "./components/Drivers/AllDrivers";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Layout /> */}
      <AllDrivers />
    </div>
  );
};

export default App;
