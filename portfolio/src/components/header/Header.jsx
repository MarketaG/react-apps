import React, { useState } from 'react'
import "./Header.css"

const Header = () => {
  /* change background header */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* toggle menu */
  const [showMenu, setShowMenu] = useState(false)
  const [activeNav, setActiveNav] = useState("#home")


  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" className="nav-logo">          <div className="home-img-logo"></div></a>

        <div className={showMenu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav-link active-link" : "nav-link"}
              >
                <i className="uil uil-estate nav-icon"></i>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}>
                <i className="uil uil-user nav-icon"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}>
                <i className="uil uil-file-alt nav-icon"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"}>
                <i className="uil uil-scenery nav-icon"></i>Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"}>
                <i className="uil uil-message nav-icon"></i>Contact
              </a>
            </li>
          </ul>

          <i class="uil uil-times nav-close" onClick={() => setShowMenu(!showMenu)}></i>
        </div>

        <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header