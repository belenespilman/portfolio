import React, { useContext, useEffect, useState } from 'react'
import Toggle from '../Toggle/Toggle'
import '../NavBar/NavBar.css'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'
import { useTranslation } from 'react-i18next'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const { t, i18n } = useTranslation()
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const colors = {
    background: 'rgba(246, 210, 210, 0.9)',
    black: '#242d49',
  }

  const [showNavbar, setShowNavbar] = useState(true)
  let lastScrollY = 0

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 20) {
        setShowNavbar(true)
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div
      className={`n-wrapper ${showNavbar ? 'visible' : 'hidden'} ${darkMode ? 'dark-mode' : ''}`}
      id="Navbar"
    >
      {/* left */}
      <div className="n-left">
        <Link to="Intro" spy={true} smooth={true} offset={-1000}>
          <div className="n-name">Belén</div>
        </Link>
        <Toggle />
        <div className="language-switcher">
          <button
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'active' : ''}
            style={{ color: darkMode ? 'white' : colors.black }}
          >
            EN
          </button>
          <span>/</span>
          <button
            onClick={() => changeLanguage('es')}
            className={i18n.language === 'es' ? 'active' : ''}
            style={{ color: darkMode ? 'white' : colors.black }}
          >
            ES
          </button>
        </div>
      </div>
      {/* right */}
      <div className="n-right">
        <div
          className={`n-list ${isMenuOpen ? 'active' : ''} ${darkMode ? 'dark-mode' : ''}`}
        >
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link
                activeClass="active"
                to="Intro"
                spy={true}
                smooth={true}
                offset={-1000}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.portfolio')}
              </Link>
            </li>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={-60}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.projects')}
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-50}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.certifications')}
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="n-contact-link"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
        >
          <button className="button n-button">{t('nav.contact')}</button>
        </Link>
        <div
          className="n-hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: darkMode ? 'white' : 'black' }}
        >
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
