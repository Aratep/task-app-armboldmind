import React, {Component} from 'react';

import {showNotification, hideNotification} from "../../constants/helper-functions";

export default function notificationHoc(WrappedComponent, message) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                message: message
            };
        }

        render() {
            return (
                <WrappedComponent
                    message={this.state.message}
                    showNotification={showNotification}
                    hideNotification={hideNotification}
                    {...this.props}
                />
            );
        }
    }
}