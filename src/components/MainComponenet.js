import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from "./Home"
import Codex from "./Codex"
import ConFusion from './ConFusion';
import Digi from './Digi';
import Example from './Navbar';
import Footer from './Footer';
import './transitions.css'; // Import your CSS file for transitions

function Main () {

  const location = useLocation()

    return (
      <>
        <Example />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" exact element={<Home />} />
            <Route path='/codex' exact element={<Codex />} />
            <Route path="/confusion" exact element={<ConFusion />} />
            <Route path="/digi" exact element={<Digi />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </>
    );
  }

export default Main;