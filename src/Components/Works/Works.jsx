import React, { useContext } from 'react'
import './Works.css'
import ReactJS from '../../img/ReactJS.png'
import NextJS from '../../img/NextJS.png'
import Vite from '../../img/Vite.png'
import Typescript from '../../img/Typescript.png'
import Tailwind from '../../img/Tailwind.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import '@fortawesome/fontawesome-free/css/all.min.css'
import WorksAnimation from '../Animations/WorksAnimation/WorksAnimation'

const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>My Most Used</span>
          <span>Technologies & Frameworks</span>
          <div className="works-desc">
            <WorksAnimation />
          </div>
          <Link to="contact" smooth={true} spy={true} className="s-link">
            <button className="button s-button">Let's Talk</button>
          </Link>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Typescript} alt="Typescript" />
          </div>
          <div className="w-secCircle">
            <img src={Vite} alt="Vite" />
          </div>
          <div className="w-secCircle">
            <img src={ReactJS} alt="ReactJS" />
          </div>{' '}
          <div className="w-secCircle">
            <img src={NextJS} alt="NextJS" />
          </div>
          <div className="w-secCircle">
            <img src={Tailwind} alt="TailwindCSS" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle mainColorCircle"></div>
      </div>
    </div>
  )
}

export default Works
