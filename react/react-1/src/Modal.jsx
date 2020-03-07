import React from 'react';
import PropTypes from 'prop-types'

export const Modal = ({header, closeIcon, actions, text, close}) => {
    return(
        <div className="modal">
            <header style={{display:'flex', justifyContent: 'space-between'}}>
                {header}
                {closeIcon && <button onClick = {close} className="close-btn">X</button>}
            </header>
            <p className="modal-text">{text}</p>
            {actions}
        </div>
    )
}