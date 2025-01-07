import React, { useContext } from 'react'
import './Services.css'
import Card from '../Card/Card'
import ReactCourse from '../../img/ReactCourse.png'
import OopCourse from '../../img/OopCourse.png'
import UiUxCourse from '../../img/uiuxCourse.png'
import '@fortawesome/fontawesome-free'

import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import StudiesAnimation from '../Animations/StudiesAnimation/StudiesAnimation'

const Services = () => {
  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  // transition
  const transition = {
    duration: 1,
    type: 'spring',
  }

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? 'white' : '' }}>Some of my</span>
        <span>Achieved Certifications</span>
        <StudiesAnimation />
        <a
          href={'https://platzi.com/p/belen.espilman/'}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <button className="button s-button">See More</button>
        </a>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '15rem' }}
          transition={transition}
        >
          <Card
            logo={ReactCourse}
            heading={'ReactJS'}
            darkMode={darkMode}
            detail={'Components, Props, States, Effect, Context, Portals.'}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: '-15rem', top: '12rem' }}
          whileInView={{ left: '-4rem', top: '10rem' }}
          transition={transition}
        >
          <Card
            logo={OopCourse}
            heading={'OOP'}
            darkMode={darkMode}
            detail={'Object Oriented Programming. Prototypes, classes.'}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: '19rem', right: '-12rem' }}
          whileInView={{ left: '15rem', top: '18rem' }}
          transition={transition}
        >
          <Card
            logo={UiUxCourse}
            darkMode={darkMode}
            heading={'UI/UX'}
            detail={'Fundamental principles of UI design for digital products.'}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Services
