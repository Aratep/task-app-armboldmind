import React from 'react';

import searchIcon from "../../images/search-icon.svg"
import notificationIcon from "../../images/notifications-icon.svg"
import avatar from "../../images/avatar.png"
import './styles.css';

function Header() {
    return (
      <header>
        <ul>
            <li><img src={searchIcon} alt="searchIcon"/></li>
            <li><img src={notificationIcon} alt="notificationIcon"/></li>
            <li><img src={avatar} alt="avatar" /></li>
            <li><span>Anna Smith</span></li>
        </ul>
      </header>
    );
}

export default Header;
