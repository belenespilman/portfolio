import Intro from './Components/Intro/Intro'
import Navbar from './Components/NavBar/NavBar'
import Services from './Components/Services/Services'
import './App.css'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useContext, useEffect } from 'react'
import { themeContext } from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <div
      className="App"
      style={{
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Intro />
      <Portfolio />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
