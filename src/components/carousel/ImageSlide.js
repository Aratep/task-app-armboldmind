import React from 'react';

import "./styles.css"

const imgStyle = {
    height: '100%',
    width: '100%',
};

const ImageSlide = ({image}) => (
    <div className="image-slide">
        <img src={image.src} alt={image.alt} style={imgStyle}/>
    </div>

);

export default ImageSlide