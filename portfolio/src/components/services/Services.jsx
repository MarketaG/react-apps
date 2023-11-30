import React, { useState } from 'react'
import "./Services.css"
import "../skills/Skills.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">What i offer</span>

      <div className="services-container container grid">
        {/********frontend skills********/}
        <div className="services-content">
          <div>
            <i class="uil uil-desktop services-icon"></i>
            <h3 className="services-title">
              Frontend<br />Skills
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(1)}>View more<i className="uil uil-arrow-right services-button-icon"></i></span>

          <div className={toggleState === 1 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">Frontend Skills</h3>
              <p className="services-modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

              <div className="skills-group">
                <div className="skills-data">
                  <i class='bx bxl-html5'></i>

                  <div>
                    <h3 className="skills-name">HTML</h3>
                    <span className="skills-level">Intermediate</span>
                  </div>
                </div>
                <div className="skills-data">
                  <i class='bx bxl-css3'></i>

                  <div>
                    <h3 className="skills-name">CSS</h3>
                    <span className="skills-level">Pre-Intermediate</span>
                  </div>
                </div>
                <div className="skills-data">
                  <i class='bx bxl-javascript' ></i>

                  <div>
                    <h3 className="skills-name">JavaScript</h3>
                    <span className="skills-level">Pre-Intermediate</span>
                  </div>
                </div>

              </div>

              <div className="skills-group">
                <div className="skills-data">
                  <i class='bx bxl-bootstrap'></i>

                  <div>
                    <h3 className="skills-name">Bootstrap</h3>
                    <span className="skills-level">Basic</span>
                  </div>
                </div>

                <div className="skills-data">
                  <i class='bx bxl-git'></i>

                  <div>
                    <h3 className="skills-name">Git</h3>
                    <span className="skills-level">Basic</span>
                  </div>
                </div>
                <div className="skills-data">
                  <i class='bx bxl-react'></i>
                  <div>
                    <h3 className="skills-name">React</h3>
                    <span className="skills-level">Pre-Intermediate</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/********backend skills********/}
        <div className="services-content">
          <div>
            <i class="uil uil-server-connection services-icon"></i>
            <h3 className="services-title">
              Backend<br />Skills
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services-button">View more<i className="uil uil-arrow-right services-button-icon"></i></span>

          <div className={toggleState === 2 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">Backend Skills</h3>
              <p className="services-modal-description">Info</p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">PHP Symfony</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">SQL</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Firebase</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">MySQL</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">PostgreSQL</p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/********other skills********/}
        <div className="services-content">
          <div>
            <i class="uil uil-clipboard-notes services-icon"></i>
            <h3 className="services-title">
              Other<br />Skills
            </h3>
          </div>

          <span className="services-button" onClick={() => toggleTab(3)}>View more<i className="uil uil-arrow-right services-button-icon"></i></span>

          <div className={toggleState === 3 ? "services-modal active-modal" : "services-modal"}>
            <div className="services-modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services-modal-close"></i>

              <h3 className="services-modal-title">Other Skills</h3>
              <p className="services-modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

              <ul className="services-modal-services grid">
                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">MS Word</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Web page development.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">I create ux element interactions.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">I position your company brand.</p>
                </li>

                <li className="services-modal-service">
                  <i className="uil uil-check-circle services-modal-icon"></i>
                  <p className="services-modal-info">Design and mockups of products for companies.</p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services