import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AddNewPlant } from "./components/Pages/AddNewPlant";
import { PlantList } from "./components/Pages/PlantList";
import { Login } from "./components/Pages/Login";
import UserDashboard from "./components/Pages/UserDashboard";
import Sidebar from "./components/PageComponents/Sidebar"
import GardenPlantPage from "./components/PageComponents/GardenPlantPage"
import { GardenPlantList } from "./components/Pages/GardenPlantList";
import { VeggiePlantList } from "./components/Pages/VeggiePlantList";
import { HousePlantList } from "./components/Pages/HousePlantList";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Sidebar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newplant" element={<AddNewPlant />} />
            <Route path="/plants" element={<PlantList />} />
            <Route path="/gardenplants" element={<GardenPlantList />} />
            <Route path="/veggieplants" element={<VeggiePlantList />} />
            <Route path="/houseplants" element={<HousePlantList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={< UserDashboard />} ></Route>
            <Route path="/plants/:id" element={< GardenPlantPage/>} ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
