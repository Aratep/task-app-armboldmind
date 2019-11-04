import React, {Component} from 'react';

export default function allFieldsValues(WrappedComponent) {
    const data = JSON.parse(localStorage.getItem('data'));

    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }

        render() {
            return (
                <WrappedComponent
                    data={data || undefined}
                    {...this.props}
                />
            );
        }
    }
}