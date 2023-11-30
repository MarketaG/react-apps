import React from 'react'
import "./About.css"
import AboutImg from "../../assets/about.jpg"
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle">My introduction</span>

      <div className="about-container container grid">
        <img src={AboutImg} alt="" className="about-img" />
        <div className="about-data">
          <Info />
          <p className="about-description">After completing my bachelor's degree in Applied Informatics at the University in Jihlava, I enthusiastically delved into the realm of information technology, despite my initial focus on medicine during my studies. With the remarkable benefit of acquiring skills for analyzing and solving diverse challenges through my education, I gradually honed in on frontend development. Specifically, I have been dedicating myself to React, finding inspiration and joy in crafting user-friendly interfaces.             As a hobby and passion, I have ventured into the field of graphic design. I have explored various graphic editors, such as Canva, GIMP, Inkspace, 3DS MAX, and Sketchup, allowing me to develop a creative perspective and skills in visual design. This combination of technical know-how and aesthetic sensibility creates a fascinating space for both personal and professional growth for me.</p>
        </div>
      </div>
    </section>
  )
}

export default About