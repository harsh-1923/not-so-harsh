import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
