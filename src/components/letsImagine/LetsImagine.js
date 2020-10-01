import React, { Component } from 'react';
import './LetsImagine.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ButtonNext from '../buttonNext/ButtonNext';
import CareerPath from '../careerPath/CareerPath';


export default class LetsImagine extends Component {

     getUrl=()=>{
       const enlace= '/careerPath';
       
     }
    render() {
        
        return (
            <div className="quoteLetsImagine">
                <p>{this.props.location.name} already belong to a studio, have a <br></br> seniority and probably already work on specific  <br></br> proyect. To understand this better</p>
                <p className="textImagine"><span>Let´s imagine!</span></p>
                <p>First we need to create our <span>fictional character!</span></p>
        
                <Link to={{ pathname: '/' }} className="button_previous enter_user" >Previous</Link>

                <Link to={{ pathname: '/careerPath' }} className="button_next enter_user" >Next</Link>
            

            </div>
        )
    }
}