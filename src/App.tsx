import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SpellList from "./components/SpellList";
import "./App.css";
import spells from "./data/spells.json";
import HomePage from "pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spellbook" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
