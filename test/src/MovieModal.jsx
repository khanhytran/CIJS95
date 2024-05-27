import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Thay đổi '#root' thành id của root element của ứng dụng của bạn nếu cần

const MovieModal = ({ isOpen, onRequestClose, movie }) => {
    if (!movie) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Movie Details"
            className="Modal"
            overlayClassName="Overlay"
        >
            <div className="movie-detail transparent">
                <img src={movie.image} alt={movie.movieName} className="movie-details-image" />
                <h2 className="movie-details-title transparent poppins-semibold text-36">{movie.movieName}</h2>
                <p className="movie-details-description transparent poppins-regular text-14">Eposide: {movie.eposide}</p>
                <p className="movie-details-description transparent poppins-regular text-14">Description: {movie.description}</p>
                <button onClick={onRequestClose} className="close-button">Close</button>
            </div>
        </Modal>
    );
};

export default MovieModal;
