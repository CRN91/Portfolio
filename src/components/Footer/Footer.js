import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Wow you've made it to the bottom!</p>
      <p><a className="silent-link" href="https://www.linkedin.com/in/akaizra" target="_blank" rel="noopener noreferrer">LinkedIn/akaizra</a> | a.kaizra@outlook.com | <a className="silent-link" href="https://github.com/CRN91" target="_blank" rel="noopener noreferrer">GitHub/CRN91</a></p>
      <p>📍 Exeter / London - Willing to relocate 🌎</p>
      <p>University of Exeter 2025 - <span style={{ color: '#00a87e' }}>Bleed Green</span></p>
    </footer>
  );
}

export default Footer;
