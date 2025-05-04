import React, { useContext, useEffect, useState } from 'react'
import Toggle from '../Toggle/Toggle'
import '../NavBar/NavBar.css'
import { Link } from 'react-scroll'
import { themeContext } from '../../Context'

const Navbar = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const colors = {
    background: '#f5eaf8',
    black: '#242d49',
  }

  const [showNavbar, setShowNavbar] = useState(true)
  let lastScrollY = 0

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
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

  return (
    <div
      className={`n-wrapper ${showNavbar ? 'visible' : 'hidden'}`}
      id="Navbar"
      style={{
        background: darkMode ? '#121212' : colors.background,
        color: darkMode ? 'white' : colors.black,
      }}
    >
      {/* left */}
      <div className="n-left">
        <Link to="Intro" spy={true} smooth={true} offset={-1000}>
          <div className="n-name">Belén</div>
        </Link>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link
                activeClass="active"
                to="Intro"
                spy={true}
                smooth={true}
                offset={-1000}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} offset={-100}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} offset={-60}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} offset={-50}>
                Studies
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} offset={-70}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
