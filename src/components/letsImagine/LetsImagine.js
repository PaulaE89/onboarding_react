import React, { Component } from 'react';
import './LetsImagine.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';


export default class LetsImagine extends Component {


    render() {

        return (
            <div className="quoteLetsImagine">
                <p>{this.props.location.name} already belong to a studio, have a <br></br> seniority and probably already work on specific  <br></br> proyect. To understand this better</p>
                <p className="textImagine"><span>Let´s imagine!</span></p>
                <p>First we need to create our <span>fictional character!</span></p>

                <div className="buttons">         
                    <Link to={{ pathname: '/' }} className="button_previous" >Previous</Link>

                    <Link to={{ pathname: '/careerPath' }} className="button_next" >Next</Link>

                </div>


            </div>
        )
    }
}