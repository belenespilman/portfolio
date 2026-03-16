import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from './Context'
import './i18n'

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
