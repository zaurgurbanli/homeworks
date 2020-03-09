import React from 'react';
import PropTypes from 'prop-types'

export const Modal = ({header, closeIcon, actions, text, close}) => {
    return(
        <div className="modal">
            <header style={{ paddingLeft: 5, color: 'white', display:'flex', justifyContent: 'space-between',alignItems: 'center', backgroundColor: 'rgba(0,0,0,.3)', height: 30 }}>
                {header}
                {closeIcon && <button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}} onClick = {close} className="close-btn">X</button>}
            </header>
            <p className="modal-text">{text}</p>
            {actions}
        </div>
    )
}