import React from 'react';

const TextArea = ({label, id, className, placeholder, onChange, value, required, min}) => (
    <div className={className}>
        <label htmlFor={id} style={{
            color: required && (value === '' || value === undefined) ? 'red' : ''
        }}>
            {label}
            <span style={{color: value !== undefined && value.length < min ? 'red' : ''}}>
                min {min} simbols
            </span>
        </label>
        <textarea
            id={id}
            placeholder={placeholder}
            rows='4'
            cols='50'
            onChange={onChange}
            value={value}
        />
    </div>
);


export default TextArea;
