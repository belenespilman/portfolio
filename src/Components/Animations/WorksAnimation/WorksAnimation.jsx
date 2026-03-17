import React, { useState, useRef, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'

import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaDatabase,
} from 'react-icons/fa'
import { themeContext } from '../../../Context'
import '../WorksAnimation/WorksAnimation.css'
import { useTranslation } from 'react-i18next'

const AnimatedTextWorks = () => {
  const { t, i18n } = useTranslation()
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const [isInView, setIsInView] = useState(false)
  const textLines = [
    {
      icon: <FaLaptopCode />,
      text: t('works.anim1'),
    },
    {
      icon: <FaPaintBrush />,
      text: t('works.anim2'),
    },
    {
      icon: <FaServer />,
      text: t('works.anim3'),
    },
    {
      icon: <FaDatabase />,
      text: t('works.anim4'),
    },
  ]
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [])

  return (
    <div
      className={`'animated-text-container' ${darkMode ? 'dark-mode' : ''} `}
    >
      {textLines.map((line, index) => (
        <motion.div
          ref={observerRef}
          key={`${i18n.language}-${index}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? -20 : 0,
          }}
          transition={{ delay: index * 0.6, duration: 0.9 }}
          className={`'animated-text-line' ${darkMode ? 'dark-mode' : ''} `}
        >
          <i className={`${darkMode ? 'dark-mode-icon' : ''}`}>{line.icon}</i>
          <span
            className={`'animated-text-line-span' ${darkMode ? 'animated-text-line-span-dark-mode' : 'animated-text-line-span'}`}
          >
            {line.text}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedTextWorks
