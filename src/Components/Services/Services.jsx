import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  // context
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [width, setWidth] = React.useState(window.innerWidth)
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = width <= 1024

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
        <span className="title" style={{ color: darkMode ? 'white' : '' }}>
          {t('services.title1')}
        </span>
        <span className="title">{t('services.title2')}</span>
        <StudiesAnimation />
        <a
          href={'https://platzi.com/p/belen.espilman/'}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <button className="button s-button">{t('services.seeMore')}</button>
        </a>
      </div>
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ x: isMobile ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
          className="s-card-wrapper s-card-1"
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
          initial={{ x: isMobile ? 50 : -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
          className="s-card-wrapper s-card-2"
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
          initial={{ x: isMobile ? -50 : 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
          className="s-card-wrapper s-card-3"
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
