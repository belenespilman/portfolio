import React from 'react'

import './FloatingDiv.css'

const FloatinDiv = ({ img, text1, text2, link }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="Visit my LinkedIn Profile" />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  )
}

export default FloatinDiv
