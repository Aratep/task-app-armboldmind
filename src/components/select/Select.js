import React from 'react';

const Select = ({label, id, className, options, value, onChange, required}) => (
    <div className={className}>
        <label htmlFor={id} style={{
            color: required && (value === '' || value === undefined) ? 'red' : ''
        }}>{label}</label>
        <select id={id} value={value} onChange={onChange}>
            <option disabled>Select category</option>
            {
                options.map(option =>
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                )
            }
        </select>
    </div>
);

export default Select;
