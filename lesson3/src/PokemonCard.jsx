import { useState } from 'react'
import './PokemonCard.css';
import Modal from './Modal.jsx'

const PokemonCard = (props) => {
    const handleSay = () => {
        alert(`${props.name} xin chào`)
    }
    const [showModal, setShowModal] = useState(false);
    const [tempPokemon,setTempPokemon] = useState(props.pokemon);
    const handleChange = (e) => {
        setTempPokemon({
            ...tempPokemon,
            [e.target.name] : e.target.value
        })
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
                  <img src={tempPokemon.image} alt="pokemon image" />
                  <p>Tên: <input type="text" value={tempPokemon.name} onChange={(e) => handleChange(e)} name='name'/></p>
                  <p>Hệ nguyên tố: <input type="text" value={tempPokemon.elemental} onChange={(e) => handleChange(e)} name='elemental'/></p>
                  <button onClick={() =>{
                    props.handleChange({
                        ...tempPokemon
                    })
                    setShowModal
                  }}>Lưu</button>
                </Modal>}
        </div>
    )
}
export default PokemonCard;