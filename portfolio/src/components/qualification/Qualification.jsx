import React from 'react'
import "./Qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">The Evolution of My Education</span>

      <div className="qualification-container container">
        <div className="qualification-tab">
          <div className="qualification-button button-flex">
            <i className="uil uil-graduation-cap qualification-icon"></i>Education
          </div>
        </div>

        <div className="qualification-sections">
          <div className="qualification-content">



            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">The Complete<br />JavaScript Course 2024:<br />From Zero to Expert!</h3>
                <h5>Online course</h5>
                <span className="qualification-subtitle">Udemy<br />online</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt"></i>Oct. 2023-present
                </div>
              </div>
            </div>


            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Applied Informatics</h3>
                <h5>Bachelor's degree</h5>
                <span className="qualification-subtitle">College of Polytechnics<br /> Jihlava</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt"></i>2020-2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>


            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">React 1; 2; 3</h3>
                <h5>Online courses</h5>
                <span className="qualification-subtitle">David Šetek<br />- Hack your future<br />online</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt"></i>Jan. 2023-Sept. 2023
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">The basics of React</h3>
                <h5>Certificate</h5>
                <span className="qualification-subtitle">ITnetwork<br />online</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt"></i>Jun. 2023
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>

              <div>
                <h3 className="qualification-title">Writing with all ten</h3>
                <h5>Certificate</h5>
                <span className="qualification-subtitle">Psaní hravě<br />Online</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt"></i>2020-2021
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">High School</h3>
                <h5>Graduation examination</h5>
                <span className="qualification-subtitle">Gymnasium Globe<br />Brno</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt"></i>2011-2015
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification