import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Onu from "./Pages/Onu";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/Onu">
          <li>Onu</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
      </nav>
      <Routes>
        <Route path="/Onu" element={<Onu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}