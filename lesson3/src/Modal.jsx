import React from 'react'
import './Modal.css';

export const Modal = (props) => {
  return (
    <div className='modal'>
        <div className="content">
            <div className="header">
              <button className='close' onClick={() => {
                props.handleClose();
              }}>close</button>
            </div>
            {props.children}
        </div>
    </div>
  )
}

export default Modal;