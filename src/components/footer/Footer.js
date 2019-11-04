import React from 'react';

import InputWithIcon from "../inputs/InputWithIcon";
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
import twitter from "../../images/twitter.svg"
import rightArrow from "../../images/right-arrow.svg"
import './styles.css';

function Footer() {
    return (
        <footer>
            <div>
                <ul className="contacts">
                    <li><span>Tel:</span><span>+3740111111</span></li>
                    <li><span>Mail:</span><span>charity@gmail.com</span></li>
                </ul>
                <ul className="company">
                    <li>Company</li>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Community</li>
                    <li>About us</li>
                    <li>News</li>
                </ul>
                <ul className="support">
                    <li>Help and Support</li>
                    <li>FAQ</li>
                    <li>Terms and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Contacts</li>
                </ul>
                <ul className="socials">
                    <li>Follow us in social</li>
                    <li className="logos">
                        <img src={facebook} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={linkedin} alt=""/>
                        <img src={instagram} alt=""/>
                    </li>
                    <li>Subscribe for new projects</li>
                    <li>
                        <InputWithIcon
                            type="text"
                            label=""
                            id="contactEmail"
                            placeholder="Your email"
                            className="input-group"
                            isIcon={true}
                            image={rightArrow}
                        />
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
