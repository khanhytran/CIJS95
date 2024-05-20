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

function App() {
  const [bulbasaur, setBulbasaur] = useState({
    id: '#001',
    name: "Bulbasaur",
    image: png001,
    elemental: 'Grass'
  });
  const [ivysaur, setIvysaur] = useState({
    id: '#002',
    name: "Ivysaur",
    image: png002,
    elemental: 'Grass'
  });
  const [venusaur, setVenusaur] = useState({
    id: '#003',
    name: "Venusaur",
    image: png003,
    elemental: 'Grass'
  });
  const [charmender, setCharmender] = useState({
    id: '#004',
    name: "Charmender",
    image: png004,
    elemental: 'Fire'
  });
  const [pokemonSelected, setPokemonSelected] = useState(null);
  
  return (
    <div className='listPokemonCard'>
      <PokemonCard pokemon={bulbasaur}   id={bulbasaur.id} name={bulbasaur.name} image={bulbasaur.image} elemental={bulbasaur.elemental}/>
      <PokemonCard pokemon={ivysaur}  id={ivysaur.id} name={ivysaur.name} image={ivysaur.image} elemental={ivysaur.elemental}/>
      <PokemonCard pokemon={venusaur} id={venusaur.id} name={venusaur.name} image={venusaur.image} elemental={venusaur.elemental}/>
      <PokemonCard pokemon={charmender} id={charmender.id} name={charmender.name} image={charmender.image} elemental={charmender.elemental}/>
      {/* <PokemonCard id="#005" name="Charmelon" image={png005} elemental="Fire"/>
      <PokemonCard id="#006" name="Charizard" image={png006} elemental="Fire"/>
      <PokemonCard id="#007" name="Squirtle" image={png007} elemental="Water"/>
      <PokemonCard id="#008" name="Watortle" image={png008} elemental="Water"/>
      <PokemonCard id="#009" name="Blastoise" image={png009} elemental="Water"/>
      <PokemonCard id="#010" name="Caterpie" image={png010} elemental="Bug"/>
      <PokemonCard id="#011" name="Metapod" image={png011} elemental="Bug"/>
      <PokemonCard id="#012" name="Butterfree" image={png012} elemental="Bug"/> */}
    </div>
  )
}

export default App
