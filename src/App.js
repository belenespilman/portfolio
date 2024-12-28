import Intro from './Components/Intro/Intro'
import Navbar from './Components/NavBar/NavBar'
import Services from './Components/Services/Services'
import './App.css'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useContext } from 'react'
import { themeContext } from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
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
