import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import png001 from './assets/001.png'
import png002 from './assets/002.png'
import png003 from './assets/003.png'
import png004 from './assets/004.png'
import png005 from './assets/005.png'
import png006 from './assets/006.png'
import png007 from './assets/007.png'
import png008 from './assets/008.png'
import png009 from './assets/009.png'
import png010 from './assets/010.png'
import png011 from './assets/011.png'
import png012 from './assets/012.png'
import PokemonCard from './PokemonCard'
import Modal from './Modal'

function ListPokemon() {
  const [listPokemon, setListPokemon] = useState([
    {
      id: '#001',
      name: "Bulbasaur",
      image: png001,
      elemental: 'Grass'
    },
    {
      id: '#002',
      name: "Ivysaur",
      image: png002,
      elemental: 'Grass'
    },
    {
      id: '#003',
      name: "Venusaur",
      image: png003,
      elemental: 'Grass'
    },
    {
      id: '#004',
      name: "Charmender",
      image: png004,
      elemental: 'Fire'
    }
  ])
const [nameSearch, setNameSearch] = useState('')
const [filter, setFilter] = useState({name:''})

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center',textAlign: 'center', margin: '18px 0'}}>
      <div>
        <input value={nameSearch} onChange={(e) => {
          setNameSearch(e.target.value)
        } } placeholder='Nhập tên pokemon' />
      </div>
      <button onClick={() => {
        setFilter({...filter, name:nameSearch})
      }}>Search</button>
      </div>
      <div className='listPokemonCard'>
        {listPokemon.map((pokemon) => {
          return (
            filter.name ? (
              (pokemon.name.trim().toLocaleLowerCase()).includes(filter.name.trim().toLocaleLowerCase()) && <PokemonCard key={pokemon.id} pokemon={pokemon} id={pokemon.id} name={pokemon.name} image={pokemon.image} elemental={pokemon.elemental} />
            ) : (<PokemonCard key={pokemon.id} pokemon={pokemon} id={pokemon.id} name={pokemon.name} image={pokemon.image} elemental={pokemon.elemental} />)
          )
        })}
      </div>
    </div>
  )
}

export default ListPokemon
