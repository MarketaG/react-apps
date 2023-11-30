import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Portfolio of Markéta Grácová</h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer-link">Skills</a>
          </li>

          <li>
            <a href="#portfolio" className="footer-link">Projects</a>
          </li>
        </ul>

        <div className="footer-social">
          <a href="https://www.linkedin.com/in/mark%C3%A9ta-gr%C3%A1cov%C3%A1" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/MarketaG" className="footer-social-link" target="_blank" rel="noopener noreferrer">
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer-copy">
          &#169; 2023 Markéta Grácová. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer