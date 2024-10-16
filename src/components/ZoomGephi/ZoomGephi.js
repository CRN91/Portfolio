import React from "react"
import ImageZoom from "react-image-zooom";
import graphSVG from './alliance2018.svg';
import './ZoomGephi.css';

function ZoomGephi() {
  return (
    <div className="graph-container">
      <ImageZoom className="graph-image" src={graphSVG} alt="Alliance Network in 2018" zoom="300"/>
    </div>
  );
}

export default ZoomGephi;