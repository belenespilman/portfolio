import React, { useContext } from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/plane.png'
import crown from '../../img/lamp.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import { themeContext } from '../../Context'
import { motion, transform } from 'framer-motion'
import Resume from './resume.pdf'
import TypingEffect from '../Animations/TypingEffect/TypingEffect'

const Intro = () => {
  const transition = { duration: 2, type: 'string' }

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hey there!</span>
          <span>Welcome to my creative corner!</span>
          <span>
            <TypingEffect />
          </span>
        </div>
        <div className="sticky-container">
          <div>
            <a href={Resume} download>
              <button
                className={` button i-button ${darkMode ? 'dark-mode' : ''}`}
              >
                Download my CV
              </button>
            </a>
          </div>
          <div className="i-icons">
            <a href="https://github.com/belenespilman" target={'_blank'}>
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/belen-espilman/"
              target={'_blank'}
            >
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* animation */}

        <motion.div
          initial={{ top: '-15%', left: '-3s%' }}
          whileInView={{ left: '-10%' }}
          transition={transition}
          className="floating-div"
          style={{ display: 'none' }}
        >
          <FloatinDiv
            img={crown}
            text1="Frontend"
            text2="Developer"
            style={{ display: 'none' }}
          />
        </motion.div>

        <motion.div
          initial={{ top: '-6%', left: '95%' }}
          whileInView={{ left: '80%' }}
          transition={transition}
          className="floating-div crown"
        >
          {!darkMode && <FloatinDiv style={{}} img={crown} />}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: '10rem', top: '65%' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          className="floating-div thumbup"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} />
        </motion.div>

        <div
          className="blur"
          style={{ background: 'rgba(210, 114, 172,.3)' }}
        ></div>
        <div
          className="blur"
          style={{
            background: 'rgba(45, 158, 243, .3)',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
