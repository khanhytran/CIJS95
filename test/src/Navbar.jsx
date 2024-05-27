import React from 'react'
import './index.css'

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="navbar">
      <div className='flex mt-16 items-center justify-space '>
        <div className="logo poppins-semibold-italic text-36 white">Animote</div>
        <div><a className="poppins-regular text-18 white-gray-800" href="">Home</a></div>
        <div><a className="poppins-regular text-18 white-gray-800" href="">List anime</a></div>
        <div className="search"><input className='bg-black search-padding border border-37 poppins-regular text-18' type="text" placeholder='Search anime or movie' /></div>
      </div>
    </div>
    </div>
  )
}
