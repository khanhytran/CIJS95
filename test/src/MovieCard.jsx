import { useState } from "react";
import './index.css'
import './MovieModal.jsx'


const MovieCard = (props) => {
    return (
        <div className="movieCard flex flex-col" onClick={props.onClick}>
            <div className="movieImage background-overlay">
                <img className="" src={props.image} alt={props.name} />
                <div className="overlay">
                    <p className="movieEposide transparent text-center white poppins-regular text-16 ">Eposide: {props.eposide}</p>
                </div>
            </div>
            <p className="movieName text-center mt-16 white poppins-semibold text-16 ">{props.name}</p>
            
        </div>
    )
}
export default MovieCard