import { useState } from 'react'
import './PokemonCard.css';
import Modal from './Modal.jsx'

const PokemonCard = (props) => {
    const handleSay = () => {
        alert(`${props.name} xin chào`)
    }
    const [showModal, setShowModal] = useState(false);
    const [pokemonname,setPokemonName] = useState(props.pokemon.name)
    const [pokemonelemental,setPokemonElemental] = useState(props.pokemon.elemental)
    const handleSave = () => {
        props.onSave(props.id, name, elemental); // Assuming you pass a function to save the changes
        setShowModal(false);
    }
    
    return (
        <div className="bound">
            <div className="itemPokemonCard">
                <div className="imgPokemon">
                    <img src={props.image} alt="Pokemon" onClick={() => {
                        setShowModal(true)
                    }} />
                </div>
                <p className="idPokemon">{props.id}</p>
                <p className='namePokemon'><b>{props.name}</b></p>
                <div className="elemental">
                    <span className={props.elemental}>{props.elemental}</span>
                    <button onClick={handleSay}>Say</button>
                </div>
            </div>
            {showModal && <Modal
                handleClose={() => {
                  setShowModal(false)
                }}
                >
                  <img src={props.pokemon.image} alt="pokemon image" />
                  <p>Tên: <input type="text" value={pokemonname} onChange={(e) => {setPokemonName(e.target.value)}}/></p>
                  <p>Hệ nguyên tố: <input type="text" value={pokemonelemental} onChange={(e) => {setPokemonElemental(e.target.value)}}/></p>
                  <button onClick={handleSave()}>Lưu</button>
                </Modal>}
        </div>
    )
}
export default PokemonCard;