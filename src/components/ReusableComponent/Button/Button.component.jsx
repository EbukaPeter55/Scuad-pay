import React from 'react';
import './Button.styles.css';

const Button = ({padding, onClick, color, buttonText, background, fontWeight, margin, type, border}) => {

    return (
        <button
            type={type}
            onClick={onClick}
            style={{border, fontWeight, padding, color, margin, background}}
            className="reusable_button"
            >
            {buttonText}
        </button>
    )
}

export default Button;