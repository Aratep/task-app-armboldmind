import React from 'react';

import closeIcon from "../../images/x-close-icon-white.png"
import {closeOverlay} from "../../constants/helper-functions";
import "./styles.css"

const Overlay = ({...props}) => (
    <span id="overlay">
        <span>
            <img src={closeIcon} alt="close" onClick={closeOverlay}/>
        </span>
        {props.children}
    </span>
)

export default Overlay;
