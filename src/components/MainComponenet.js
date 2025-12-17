import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Codex from "./Codex";
import TechnoWave from "./Techno";
import Example from "./Navbar";
import Footer from "./Footer";
import "./transitions.css"; // Import your CSS file for transitions

function Main() {
  const location = useLocation();

  return (
    <>
      <Example />
      <Routes location={location} key={location.key}>
        <Route path="/" exact element={<Home />} />
        <Route path="/codex" exact element={<Codex />} />
        <Route path="/techno-wave" exact element={<TechnoWave />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
