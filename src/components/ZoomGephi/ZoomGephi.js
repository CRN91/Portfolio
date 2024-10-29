import React from "react";
import ImageZoom from "react-image-zooom";
import graphSVG from './alliance2018.svg';
import './ZoomGephi.css';

function ZoomGephi() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="zoom-gephi-container">
      <h2 className="graphimg1-title">Visualisation of the Alliance Network in 2018</h2>
      <br />
      {!isMobile && (
        <h4 className="graphimg3-title">Tip: Click on the image to zoom and pan</h4>
      )}
      {isMobile ? (
        <img 
          src={graphSVG} 
          alt="Alliance Network in 2018"
          className="graph-image2 static-image"
        />
      ) : (
        <ImageZoom 
          className="graph-image2" 
          src={graphSVG} 
          alt="Alliance Network in 2018" 
          zoom="250"
        />
      )}
    </div>
  );
}

export default ZoomGephi;