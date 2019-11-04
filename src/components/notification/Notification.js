import React from "react"

import "./styles.css"

export const Notification = ({message, ...props}) => (
    <div id="notification">
        <span onClick={props.hideNotification}>x</span>
        <div>{message}</div>
    </div>
)

export default Notification