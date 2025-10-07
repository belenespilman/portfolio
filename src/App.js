import Intro from './Components/Intro/Intro'
import Navbar from './Components/NavBar/NavBar'
import Services from './Components/Services/Services'
import './App.css'
import Works from './Components/Works/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useContext } from 'react'
import bgImage from './img/—Pngtree—abstract purple line wave background_5542852.png'
import { themeContext } from './Context'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? ' #121212 ' : '',
        color: darkMode ? 'white' : '',
        backgroundImage: darkMode ? `url(${bgImage})` : '',
        backgroundSize: 'contain',
        backgroundPosition: 'initial',
        backgroundRepeat: 'no-repeat',
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
