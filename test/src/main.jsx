import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Explore from './Explore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Explore/>
  </React.StrictMode>,
)
