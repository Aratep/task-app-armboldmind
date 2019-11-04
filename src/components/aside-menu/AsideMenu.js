import React from 'react';

import checkMark from "../../images/check-mark.svg"
import {items} from "../../constants/aside-menu-items"
import './styles.css';

const AsideMenu = ({className}) => (
    <aside className={className}>
        <table id="asideMenu">
            <tbody>
            {
                items.map((item, i) => {
                    return <tr key={item.name}>
                        <td>{i + 1}.</td>
                        <td>
                            {/*eslint-disable-next-line*/}
                            <a href="#">{item.name}</a>
                        </td>
                        <td><img src={checkMark} alt="check"/></td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </aside>
);

export default AsideMenu;

