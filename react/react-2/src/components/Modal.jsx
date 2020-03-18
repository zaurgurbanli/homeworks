import React from 'react';
import PropTypes from 'prop-types'

export const Modal = ({header, closeIcon, actions, text, close}) => {
    return(
        <div className="modal-container">
            <div className="modal">
                <header className="modal-heaeder">
                    {header}
                    {closeIcon && <button onClick = {close} className="close-btn">X</button>}
                </header>
                <p className="modal-text">{text}</p>
                {actions}
            </div>
        </div>
    )
}