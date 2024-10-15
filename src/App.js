import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import DownloadCV from './components/DownloadCV/DownloadCV';
import Volunteering from './components/Volunteering/Volunteering';
import Dissertation from './components/Visualisations/Visualisations';
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
  </div> 
  );
}
