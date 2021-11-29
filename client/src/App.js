import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./components/Pages/Home";
import { AddNewPlant } from "./components/Pages/AddNewPlant";
import { PlantList } from "./components/Pages/PlantList";
//import { Login } from "./components/Pages/Login";
import UserDashboard from "./components/Pages/UserDashboard";
import Sidebar from "./components/PageComponents/Sidebar"
import GardenPlantPage from "./components/PageComponents/GardenPlantPage"
import { GardenPlantList } from "./components/Pages/GardenPlantList";
import { VeggiePlantList } from "./components/Pages/VeggiePlantList";
import { HousePlantList } from "./components/Pages/HousePlantList";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          debugger
        setUser(user)});
        
      }
    });
  }, [user]);

  if (user) {
    return (
      <>
        <Router>
          <NavBar />
          <Sidebar user={user} setUser={setUser} />
          <div className="pages">
            <Routes>
              <Route path="/newplant" element={<AddNewPlant />} />
              <Route path="/plants" element={<PlantList />} />
              <Route path="/gardenplants" element={<GardenPlantList />} />
              <Route path="/veggieplants" element={<VeggiePlantList />} />
              <Route path="/houseplants" element={<HousePlantList />} />
              <Route path="/dashboard" element={< UserDashboard />} ></Route>
              <Route path="/plants/:id" element={< GardenPlantPage />} ></Route>
            </Routes>
          </div>
        </Router>
      </>
    )
  } else {
    return (
      <>
        <Router>
          <NavBar />
        </Router>
        < Home setUser={setUser} />
      </>


    );
  };
}

export default App;