import React, { useState, useRef, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaRocket } from 'react-icons/fa'
import { themeContext } from '../../../Context'
import '../StudiesAnimation/StudiesAnimation.css'

const StudiesAnimation = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [isInView, setIsInView] = useState(false)

  const textLines = [
    {
      icon: <FaBook />,
      text: 'I have successfully completed several professional courses that significantly enhanced my expertise in Web Development.',
    },
    {
      icon: <FaRocket />,
      text: 'These programs covered a wide range of modern technologies, including React.js, Tailwind CSS, Vite, Next.js, JavaScript, and other industry-leading tools.',
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
          <i
            className={`'animated-text-line' ${darkMode ? 'dark-mode' : 'animated-text-line'} `}
          >
            {line.icon}
          </i>
          <span
            className={`'animated-text-line' ${darkMode ? 'dark-mode' : 'animated-text-line'} `}
          >
            {line.text}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default StudiesAnimation
