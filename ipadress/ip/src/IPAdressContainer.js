import React, {Component} from 'react';
import IPAdress from "./IPAdress";

var ajax;

class IPAdressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_adress: '...'
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        ajax = new XMLHttpRequest();
        ajax.open('GET', 'https://ipinfo.io/json', true);
        ajax.send();

        ajax.addEventListener('readystatechange', this.processRequest, false);
    }

    processRequest() {
        if (ajax.readyState === 4 && ajax.status === 200) {
            var response = JSON.parse(ajax.responseText);

            this.setState({
                ip_adress: response.ip
            });
        }
    }
    render() {
        return (
            <IPAdress ip={this.state.ip_adress}/>
        );
    }
}

export default IPAdressContainer;
