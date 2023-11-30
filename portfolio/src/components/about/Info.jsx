import React from 'react'

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <i class='bx bx-desktop about-icon'></i>

        <h3 className="about-title">Programming</h3>
        <span className="about-subtitle">FE/BE/DB</span>
      </div>
      <div className="about-box">
        <i class='bx bx-palette about-icon'></i>

        <h3 className="about-title">Design</h3>
        <span className="about-subtitle">graphic editors</span>
      </div>
      <div className="about-box">
        <i class='bx bx-search-alt about-icon'></i>
        <h3 className="about-title">Analytical thinking</h3>
        <span className="about-subtitle">problem-solving</span>
      </div>
    </div>
  )
}

export default Info