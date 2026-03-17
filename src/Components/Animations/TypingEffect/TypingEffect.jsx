import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Typewriter from 'react-typewriter-effect'
import { themeContext } from '../../../Context'
import './TypingEffect.css'

const TypingEffect = () => {
  const { t, i18n } = useTranslation()
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
          key={i18n.language}
          startDelay={3000}
          cursorColor={darkMode ? 'white' : 'black'}
          text={t('intro.typing')}
          typeSpeed={20}
        />
      </h1>
    </div>
  )
}

export default TypingEffect
