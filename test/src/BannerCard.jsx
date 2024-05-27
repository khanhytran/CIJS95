import { useState } from "react";
import './index.css'
import './Modal.jsx'


const BannerCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="banner-card">
            <div className="banner-image" onClick={() => {
                        setShowModal(true)
                    }}>
                <img className="" src={props.image} alt={props.name} />
                <div className="overlay2">
                </div>
                <div className="content">
                    <p className="banner-name transparent poppins-semibold text-36 white">{props.name}</p>
                    <p className="banner-des transparent poppins-regular text-16 white">{props.description}</p>
                </div>
            </div>
            {showModal && <Modal
                handleClose={() => {
                  setShowModal(false)
                }}
                >
                  <img src={props.image} alt={props.name} />
                  <p>{props.name}</p>
                  <p>{props.description}</p>
                  <p>{props.episode}</p>
                </Modal>}
        </div>
    )
}
export default BannerCard