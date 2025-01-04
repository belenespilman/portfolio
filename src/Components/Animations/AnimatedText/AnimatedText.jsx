import React from 'react'
import { motion } from 'framer-motion'

const AnimatedText = ({ text, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.6 }}
    >
      <span>{text}</span>
    </motion.div>
  )
}

export default AnimatedText
