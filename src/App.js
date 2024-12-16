import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutSection from "./pages/AboutSection";
import { Work } from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
