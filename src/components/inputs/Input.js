import React from 'react';

import './styles.css';

function Input({label, type, id, className, placeholder, value, readOnly, onChange, required}) {
    return (
        <div className={className}>
            <label htmlFor={id} style={{
                color: required && (value === '' || value === undefined) ? 'red' : ''
            }}>{label}</label>
            <input type={type}
                   id={id}
                   onChange={onChange}
                   placeholder={placeholder}
                   value={value}
                   readOnly={readOnly}/>
        </div>
    );
}

export default Input;
