import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './contact';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
ReactDOM.createRoot(document.getElementById('card')).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
)
