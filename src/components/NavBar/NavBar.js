import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar">
    <div className="nav-left">
      <h2>Adam Kaizra</h2>
    </div>
    <div className="nav-right">
      <a href="https://www.linkedin.com/in/akaizra/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/CRN91" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="mailto:a.kaizra@outlook.com">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </div>
);

export default NavBar;