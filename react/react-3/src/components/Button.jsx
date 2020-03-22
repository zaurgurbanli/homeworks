import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({text, backgroundColor, onClickk}) => {
    
    return (
    <button className="btn" onClick={onClickk}>{text}</button>
      
    )
}
Button.propTypes ={
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}