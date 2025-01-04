import React, { useContext, useEffect } from 'react'
import Typewriter from 'react-typewriter-effect'
import { themeContext } from '../../../Context'

const TypingEffect = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  useEffect(() => {
    const typingText = document.querySelector('.typing-text')
    if (typingText) {
      typingText.style.color = darkMode ? 'white' : '#242d49'
    }
  }, [darkMode])
  return (
    <div className="typing-container">
      <h1 className="typing-text">
        <Typewriter
          startDelay={1000}
          cursorColor={darkMode ? 'white' : 'black'}
          text="I'm Belen, a coffee-fueled Full Stack Developer. I build digital solutions that blend design and functionality. Dive into my projects and let’s bring great ideas to life!"
          typeSpeed={50}
        />
      </h1>
    </div>
  )
}

export default TypingEffect
