import { useState } from "react";
import './index.css'

const BannerCard = (props) => {
    return (
        <div className="banner-card" onClick={props.onClick}>
            <div className="banner-image">
                <img className="" src={props.image} alt={props.name} />
                <div className="overlay2">
                </div>
                <div className="content">
                    <p className="banner-name transparent poppins-semibold text-36 white">{props.name}</p>
                    <p className="banner-des transparent poppins-regular text-16 white">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
export default BannerCard