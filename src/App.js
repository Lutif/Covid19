import React from "react";
// import "./App.css";
import MainMap from "./components/MapMain";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="container-fluid bg-dark text-white">
      <Dashboard />
      <MainMap />
    </div>
  );
}

export default App;
