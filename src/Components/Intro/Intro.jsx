import React, { useContext, useEffect, useState } from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector-1.png'
import Vector2 from '../../img/Vector2.png'
import thumbup from '../../img/plane.png'
import crown from '../../img/lamp.png'
import FloatinDiv from '../FloatingDiv/FloatingDiv'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import Resume from './resume.pdf'
import TypingEffect from '../Animations/TypingEffect/TypingEffect'
import AnimatedText from '../Animations/AnimatedText/AnimatedText'
import Rubik from '../../img/rubik.png'

const Intro = () => {
  const transition = { duration: 2, type: 'string' }
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [showDiv, setShowDiv] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    const img1 = new Image()
    const img2 = new Image()

    img1.src = Vector1
    img2.src = Vector2

    let loaded = 0
    const handleLoad = () => {
      loaded++
      if (loaded === 2) {
        setTimeout(() => {
          setImagesLoaded(true)
        }, 10000)
      }
    }

    img1.onload = handleLoad
    img2.onload = handleLoad
  }, [])

  useEffect(() => {
    const animationDuration = 6000
    const timer = setTimeout(() => setShowDiv(true), animationDuration)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className={`i-name ${darkMode ? 'dark-mode-i-name' : ''}`}>
          <AnimatedText text="Hey there!" delay={0.5} />
          <AnimatedText text="Welcome to my creative corner!" delay={2} />
        </div>
        <div className="i-type">
          <span>
            <TypingEffect />
          </span>
        </div>
        {showDiv && (
          <div className="i-container">
            <a style={{ textDecorationLine: 'none' }} href={Resume} download>
              <button
                className={`button i-button ${darkMode ? 'i-button dark-mode' : ''}`}
              >
                Download my CV
              </button>
            </a>
            <div className="i-icons">
              <a
                href="https://github.com/belenespilman"
                target={'_blank'}
                rel="noreferrer"
              >
                <img src={Github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/belen-espilman/"
                target={'_blank'}
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Intro
