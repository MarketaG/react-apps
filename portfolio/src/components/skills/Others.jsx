import React from 'react'
import { PiMicrosoftExcelLogoFill, PiMicrosoftWordLogoFill } from "react-icons/pi";
import { SiUml } from "react-icons/si";
import { SiCanva } from "react-icons/si";

const Others = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Others</h3>

      <div className="skills-box">
        <div className="skills-group">

          <div className="skills-data">
            <PiMicrosoftWordLogoFill className='skills-icons' />

            <div>
              <h3 className="skills-name">MS Word</h3>
              <span className="skills-level">Advanced</span>
            </div>
          </div>
          <div className="skills-data">
            <PiMicrosoftExcelLogoFill
              className='skills-icons' />

            <div>
              <h3 className="skills-name">MS Excel</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <SiUml
              className='skills-icons' />

            <div>
              <h3 className="skills-name">UML</h3>
              <span className="skills-level">Pre-Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <SiCanva
              className='skills-icons' />

            <div>
              <h3 className="skills-name">Canva</h3>
              <span className="skills-level">Intermediate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Others