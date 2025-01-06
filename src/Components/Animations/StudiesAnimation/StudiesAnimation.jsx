import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaRocket } from 'react-icons/fa'

const StudiesAnimation = () => {
  const [isInView, setIsInView] = useState(false)

  const textLines = [
    {
      icon: <FaBook />,
      text: 'I have successfully completed several professional courses that significantly enhanced my expertise in Web Development.',
    },
    {
      icon: <FaRocket />,
      text: 'These courses covered a wide range of modern technologies, including React.js, Tailwind CSS, Vite, Next.js, JavaScript, and other industry-leading tools.',
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
    <div style={{ width: '80%', lineHeight: '1' }}>
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
          className="animated-text-line"
        >
          <i style={{ fontSize: '1.3rem', lineHeight: 1.9, fontWeight: 700 }}>
            {line.icon}
          </i>
          <span
            style={{ fontSize: '1.3rem', lineHeight: 1.9, fontWeight: 700 }}
          >
            {line.text}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default StudiesAnimation
