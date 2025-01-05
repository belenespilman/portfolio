import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

import {
  FaLaptopCode,
  FaPaintBrush,
  FaServer,
  FaDatabase,
} from 'react-icons/fa'

const AnimatedTextWorks = () => {
  const [isInView, setIsInView] = useState(false)
  const textLines = [
    {
      icon: <FaLaptopCode />,
      text: 'I specialize in modern frameworks like React.js, Vite and Next.js.',
    },
    {
      icon: <FaPaintBrush />,
      text: 'I work with TailwindCSS and TypeScript to ensure attractive and efficient designs.',
    },
    {
      icon: <FaServer />,
      text: "I'm equally skilled in backend technologies such as Node.js, Express and Nest.js.",
    },
    {
      icon: <FaDatabase />,
      text: 'I manage both relational and non-relational databases like PostgreSQL and MongoDB.',
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
        threshold: 0.2, // El 20% del elemento debe estar visible
      },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    // Limpiamos el observer al desmontar el componente
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [])

  return (
    <div className="animated-text-container">
      {textLines.map((line, index) => (
        <motion.div
          ref={observerRef}
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? -20 : 0,
          }}
          transition={{ delay: index * 0.6, duration: 0.9 }}
          className="animated-text-line"
        >
          <span style={{ marginRight: '10px' }}>{line.icon}</span>
          <span
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.9',
              fontWeight: 500,
            }}
          >
            {line.text}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedTextWorks
