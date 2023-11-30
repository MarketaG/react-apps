import React from 'react'
import { LiaSymfony } from "react-icons/lia";
import { GoDatabase } from "react-icons/go";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";

const Backend = () => {
  return (
    <div className="skills-content">
      <h3 className="skills-title">Backend</h3>

      <div className="skills-box">
        <div className="skills-group">

          <div className="skills-data">
            <LiaSymfony className='skills-icons' />

            <div>
              <h3 className="skills-name">Symfony PHP</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>
          <div className="skills-data">
            <GoDatabase className='skills-icons' />

            <div>
              <h3 className="skills-name">SQL</h3>
              <span className="skills-level">Pre-Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <GrMysql className='skills-icons' />

            <div>
              <h3 className="skills-name">MySQL</h3>
              <span className="skills-level">Pre-Intermediate</span>
            </div>
          </div>

          <div className="skills-data">
            <IoLogoFirebase className='skills-icons' />

            <div>
              <h3 className="skills-name">Firebase</h3>
              <span className="skills-level">Basic</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Backend