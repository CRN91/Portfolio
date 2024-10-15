import React from 'react';
import './Visualisations.css';
import Graph1 from './expchoro.png';
import Graph2 from './2018_alliance_types.png';
import Graph3 from './tradeforceatlas2018.png';

const Dissertation = () => {
  return (
    <div className="dissertation">
      <div className="section">
        <div className="content">
          <h2>Dissertation Topic 1</h2>
          <p>Details about your first dissertation topic and what you did.</p>
        </div>
        <div className="graph">
          <img src={Graph1} alt="Graph 1" />
        </div>
      </div>
      <div className="section">
        <div className="graph">
          <img src={Graph2} alt="Graph 2" />
        </div>
        <div className="content">
          <h2>Dissertation Topic 2</h2>
          <p>Details about your second dissertation topic and what you did.</p>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <h2>Dissertation Topic 3</h2>
          <p>Details about your third dissertation topic and what you did.</p>
        </div>
        <div className="graph">
          <img src={Graph3} alt="Graph 3" />
        </div>
      </div>
    </div>
  );
}

export default Dissertation;
