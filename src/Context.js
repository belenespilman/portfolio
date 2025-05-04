import { createContext, useReducer } from 'react'

export const themeContext = createContext()

const getInitialDarkMode = () => {
  const saved = localStorage.getItem('darkMode')
  return saved !== null ? JSON.parse(saved) : false
}

const initialState = { darkMode: getInitialDarkMode() }

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      const updatedDarkMode = !state.darkMode
      localStorage.setItem('darkMode', JSON.stringify(updatedDarkMode))
      return { darkMode: updatedDarkMode }
    default:
      return state
  }
}

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState)
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  )
}
