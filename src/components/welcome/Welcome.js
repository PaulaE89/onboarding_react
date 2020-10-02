import React, { Component } from 'react';

import welcomeImage from '../../assets/welcome.png';
import './welcome.css';
import InputUser from '../inputUser/InputUser'

export class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    userName = (name) => {
        this.setState({ name })
    };
    render() {
        return (
            <div className="content">
                <div className="content-child">
                    <h1 className="welcome-title">So excited to have you on board! </h1>
                    <img src={welcomeImage} alt="welcome" className="image-welcome" />
                    <InputUser userName={this.userName} />
                </div>
            </div>
        );
    }
}
export default Welcome;