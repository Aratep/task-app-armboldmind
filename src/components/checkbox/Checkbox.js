import React from 'react';

import './styles.css';

function Checkbox({label, type, id, className}) {
    return (
        <div className={className}>
            <input type={type} id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default Checkbox;
