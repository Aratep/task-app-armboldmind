import React from 'react';

import './styles.css';

const Button = ({text, className, onClick}) => (
    <button className={`button ${className}`} onClick={onClick}>
        {text}
    </button>
);

export default Button;
