import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";
import WorkPage from "./Pages/WorkPage/WorkPage.jsx";
import XRSimWork from "./Pages/XRSimWork/XRSimWork";

import LandingPage from "./Pages/LandingPage/LandingPage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/xrsim-work" element={<XRSimWork />} />
      </Routes>
    </div>
  );
}

export default App;
