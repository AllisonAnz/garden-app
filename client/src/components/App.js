import "../App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { AddNewPlant } from "./components/Pages/AddNewPlant";
import { Plants } from "./components/Pages/Plants";
import { Login } from "./components/Pages/Login";
import UserDashboard from "./components/Pages/UserDashboard";
import Sidebar from "./components/PageComponents/Sidebar"

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
                        <Route path="/plants" element={<Plants />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={< UserDashboard />} ></Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;