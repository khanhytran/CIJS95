import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './homepage/section/Hero/Hero.jsx'
import Intro from './homepage/section/Intro/Intro.jsx'
import CTA from './homepage/section/CTA/CTA.jsx'
import Course from './homepage/section/Course/Course.jsx'
import Footer from './homepage/section/Footer/Footer.jsx'
import ModalPayment from './homepage/component/ModalPayment.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <ModalPayment/>
    <Intro/>
    <Course/>
    <CTA/>
    <Footer/>
  </React.StrictMode>,
)
