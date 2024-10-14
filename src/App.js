import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import DownloadCV from './components/DownloadCV/DownloadCV';
import Volunteering from './components/Volunteering/Volunteering';
export default function App() {
  return (
    <div className="App">
    <NavBar />
    <div className="container">
      <div style={{marginLeft: '20px'}} className="intro">
        <About />
      </div>
      <div className="graph">
        <NetworkGraph />
      </div>
    </div>
    <div className="container">
      <div className="cv">
        <DownloadCV />
      </div>
      <div className="volunteering">  
        <Volunteering />
      </div>
    </div>
  </div> 
  );
}
