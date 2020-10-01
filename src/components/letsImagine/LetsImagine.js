import React, { Component } from 'react';
import './LetsImagine.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ButtonNext from '../buttonNext/ButtonNext';
import CareerPath from '../careerPath/CareerPath';


export default class LetsImagine extends Component {

     getUrl=()=>{
       const enlace= '/careerPath';
       return enlace;
     }
    render() {
        
        return (
            <div className="quoteLetsImagine">
                <p>{this.props.location.name} already belong to a studio, have a <br></br> seniority and probably already work on specific  <br></br> proyect. To understand this better</p>
                <p className="textImagine"><span>Let´s imagine!</span></p>
                <p>First we need to create our <span>fictional character!</span></p>
                {/* <ButtonNext Link to exact path="/careerPath" Component={CareerPath}></ButtonNext> */}
                <ButtonNext prueba={this.getUrl} ></ButtonNext>

            </div>
        )
    }
}