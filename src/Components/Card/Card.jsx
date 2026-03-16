import React from 'react'
import './Card.css'

const Card = ({ heading, detail, logo, darkMode }) => {
  return (
    <div className={`card ${darkMode ? 'dark' : ''}`}>
      <img src={logo} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  )
}

export default Card
