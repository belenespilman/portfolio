import React, { useState, useRef, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaRocket } from 'react-icons/fa'
import { themeContext } from '../../../Context'
import '../StudiesAnimation/StudiesAnimation.css'
import { useTranslation } from 'react-i18next'

const StudiesAnimation = () => {
  const { t } = useTranslation()
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [isInView, setIsInView] = useState(false)

  const textLines = [
    {
      icon: <FaBook />,
      text: t('services.anim1'),
    },
    {
      icon: <FaRocket />,
      text: t('services.anim2'),
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
        threshold: 0.4,
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
    <div className="animated-div">
      {textLines.map((line, index) => (
        <motion.div
          ref={observerRef}
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? -20 : 0,
          }}
          transition={{ delay: index * 0.7, duration: 0.9 }}
          className={`'animated-text-line' ${darkMode ? 'dark-mode' : 'animated-text-line'} `}
        >
          <i className={` ${darkMode ? 'dark-mode' : ''} `}>{line.icon}</i>
          <span className={` ${darkMode ? 'dark-mode' : ''} `}>
            {line.text}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default StudiesAnimation
