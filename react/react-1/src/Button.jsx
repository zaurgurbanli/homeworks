import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({text, backgroundColor, onClick, disable}) => {
    
    return (
    <button className="btn" style={{backgroundColor, borderRadius: 5}} onClick={onClick} disabled={disable}>{text}</button>
      
    )
}
Button.propTypes ={
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}