import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import Dissertation from './components/Dissertation/Dissertation';
import Technologies from './components/Technologies/Technologies';

export default function App() {
  return (
    <div className="App">
    <NavBar />
    <div className="container">
      <div className="intro">
        <About />
      </div>
      <div className="graph">
        <NetworkGraph />
      </div>
    </div>
    <div>
      <Dissertation />
    </div>
    <Technologies />

  </div> 
  );
}
