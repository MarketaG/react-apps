import React from 'react'

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">Markéta Grácová
      </h1>
      <h3 className="home-subtitle">University Graduate in Applied Informatics</h3>
      <p className='home-description'>I am interested in new challenges and opportunities that will allow me to develop my skills and bring innovative approaches to technology projects.</p>

      <a href="#contact" className="button button-flex">
        Say Hello
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" fill="var(--container-color)" /></svg>
      </a>
    </div>
  )
}

export default Data