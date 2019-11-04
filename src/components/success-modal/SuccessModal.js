import React from 'react';

import plane from "../../images/plane.svg";
import Button from "../button/Button";
import './styles.css';

const SuccessModal = ({onClick}) => (
    <section id="successModal">
        <img src={plane} alt="plane"/>
        <h1>Your topic was successfully submitted!</h1>
        <p>
            We are very thankful that you are our community active member.
            It will appear in community forum as soon as we have an overview look at it
        </p>
        <Button
            text="ok"
            className="ok"
            onClick={onClick}
        />
    </section>
);

export default SuccessModal;
