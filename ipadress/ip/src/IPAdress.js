import React, {Component} from 'react';
import './IPAdress.css';

class IPAdress extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.ip}</h1>
                <p>It seems to be your IP adress</p>
            </div>
        );
    }
}

export default IPAdress;