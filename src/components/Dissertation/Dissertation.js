import React from 'react';
import './Dissertation.css';
import ZoomGephi from '../ZoomGephi/ZoomGephi';

const Dissertation = () => {
  return (
    <div className="dissertation-container">
      <h1 className="title">Exploring the Impact of Alliances on the International Trade Network Through Network Analysis</h1>
      <div className="section">
        <div className="text-content">
          <h2 className="Libraries-text">Python Libraries:</h2>
          <div className="keywords">
            <span className="keyword">Networkx</span>
            <span className="keyword">Pandas</span>
            <span className="keyword">Requests</span>
            <span className="keyword">Seaborn</span>
            <span className="keyword">Plotly</span>
            <span className="keyword">Matplotlib</span>
          </div>
          <h2 className="What-I-learnt-text">What I learnt:</h2>
          <ul>
            <li><span>API querying and optimisation</span></li>
            <li><span>Dataset sourcing & cleaning: finding and fixing errors in the data</span></li>
            <li><span>Data exploration: understanding and getting insights from the data</span></li>
            <li><span>Visualisations: creating graphs to better understand and present the data</span></li>
            <li><span>Generating edge tables from the datasets</span></li>
            <li><span>Network creation: generating various permutations of the networks</span></li>
            <li><span>Network analysis</span></li>
            <li><span>Network visualisation using Gephi</span></li>
          </ul>
        </div>
        <div className="graph-content">
          <ZoomGephi />
        </div>
      </div>
    </div>
  );
}

export default Dissertation;
