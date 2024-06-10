import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListPokemon from './ListPokemon'

export default function App() {
  return (
    <div>
        <Routes>
            <Route path='' element={<h1>Chào mừng</h1>}/>
            <Route path='/home' element={<ListPokemon/>}/>

        </Routes>
    </div>
  )
}
