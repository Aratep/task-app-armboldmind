import React from 'react';

import "./styles.css"

const Arrow = ({direction, clickFunction, glyph}) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        <img src={glyph} alt="arrow"/>
    </div>
);

export default Arrow