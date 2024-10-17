import React from "react"
import ImageZoom from "react-image-zooom";
import graphSVG from './alliance2018.svg';
import './ZoomGephi.css';

function ZoomGephi() {
  return (
    <div>
      <h2 className="graphimg3-title"> Visualisation of the Alliance Network in 2018</h2>
      <br></br>
      <h4 className="graphimg3-title"> Tip: Click on the image to zoom and pan </h4>
      <ImageZoom className="graph-image2" src={graphSVG} alt="Alliance Network in 2018" zoom="300"/>
    </div>
  );
}

export default ZoomGephi;