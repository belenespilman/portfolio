import React, { useContext } from 'react'
import { motion } from 'framer-motion'

import '../AnimatedText/AnimatedText.css'
import { themeContext } from '../../../Context'

const AnimatedText = ({ text, delay }) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.9 }}
      className={darkMode ? 'dark-mode-animation' : ''}
    >
      <span>{text}</span>
    </motion.div>
  )
}

export default AnimatedText
