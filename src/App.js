import React from "react";
import "./App.css";
import MainMap from "./components/MapMain";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Dashboard/>
      <MainMap/>
    </div>
  );
}

export default App;
