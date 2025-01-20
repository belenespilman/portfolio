import React from 'react'
import './Card.css'

const Card = ({ heading, detail, logo, darkMode }) => {
  return (
    <div className="card" style={{ background: darkMode ? '#1E1E1E' : '' }}>
      <img src={logo} alt="" />
      <span>{heading}</span>
      <span style={{ color: darkMode ? 'rgba(255,255,255,.8)' : '' }}>
        {detail}
      </span>
    </div>
  )
}

export default Card
