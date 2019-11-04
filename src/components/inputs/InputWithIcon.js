import React from "react";

import "./styles.css"

function InputWithIcon({label, id, className, type, placeholder, text, isIcon, image, onClick, onChange, value, required}) {
    const btn = <div className="input-group-append">
        <div className="vl"/>
        <span className="input-group-text">{text}</span>
    </div>;
    const icon = <img src={image} alt="icon" onClick={onClick}/>;
    const elem = isIcon ? icon : btn;

    return (
        <div className={`input-group-wicon ${className}`}>
            <label htmlFor={id} style={{
                color: required && value === '' ? 'red' : ''
            }}>{label}</label>
            <input type={type}
                   className="form-control"
                   id={id} placeholder={placeholder}
                   onChange={onChange}
                   value={value}
            />
            {elem}
        </div>
    )
}

export default InputWithIcon