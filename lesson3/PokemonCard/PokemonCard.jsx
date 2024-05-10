import './PokemonCard.css'

const PokemonCard = () => {
    return (
        <div className="bound">
            <div className="itemPokemonCard">
                <div className="imgPokemon">
                    <img src="https://github.com/HybridShivam/Pokemon/blob/master/assets/images/001.png?raw=true" alt="Pokemon" />
                </div>
                <p className="idPokemon">#0001</p>
                <p className='namePokemon'><b>Buldbasaur</b></p>
                <div className="elemental">
                    <span>Grass</span>
                    <span>Posion</span>
                </div>
            </div>
        </div>
    )
}
export default PokemonCard;