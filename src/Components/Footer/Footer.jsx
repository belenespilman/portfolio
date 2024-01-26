import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" className="wave" />
      <div className="f-content">
        <span>belenespilman@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.linkedin.com/in/belen-espilman/"
            target={'_blank'}
          >
            <Linkedin color="white" size={'3rem'} />
          </a>
          <a href="https://github.com/belenespilman" target={'_blank'}>
            <Github color="white" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
