import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './homepage/section/Hero/Hero.jsx'
import Intro from './homepage/section/Intro/Intro.jsx'
import CTA from './homepage/section/CTA/CTA.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Intro/>
    <CTA/>
  </React.StrictMode>,
)
