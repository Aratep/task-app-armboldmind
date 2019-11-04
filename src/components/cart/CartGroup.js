import React from 'react';

import addIcon from "../../images/add-icon.svg";
import closeIcon from "../../images/x-close-icon-white.png";
import './styles.css';

function CartGroup({images, className, onClick, onChange, name}) {
    return (
        <div className={className}>
            <div style={{
                background: `url(${addIcon}) center no-repeat`
            }}>
                <input type="file"
                       multiple="multiple"
                       name={name}
                       className="upload-button"
                       accept="image/*"
                       onChange={onChange}
                />
            </div>
            {
                images.length > 0 && images.map(image =>
                    <div
                        key={image}
                        onClick={onClick}
                        style={{background: `url(${image}) center no-repeat`}}>
                        <img src={closeIcon} alt="close" className="close"/>
                    </div>
                )
            }
        </div>
    );
}

export default CartGroup;
