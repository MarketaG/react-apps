import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.title}</h3>
      <a href={item.href} className="work-button" target="_blank" rel="noopener noreferrer">
        Demo <i className="bx bx-right-arrow-alt work-button-icon"> </i>
      </a>
    </div>
  )
}

export default WorkItems