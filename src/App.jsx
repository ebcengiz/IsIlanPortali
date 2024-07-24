/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import IlanList from "./components/IlanList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IlanDetay from "./components/IlanDetay";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>İş İlan Portalı</h1>
        </header>
        <Routes>
          <Route path="/" element={<IlanList />} />
          <Route path="/ilan/:id" element={<IlanDetay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
