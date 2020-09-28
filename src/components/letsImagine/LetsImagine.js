import React, { Component } from 'react';
import './LetsImagine.css';
import userName from '../inputUser/InputUser';


export default class LetsImagine extends Component {
    render() {
     console.log("aquis", this.props.name);
       // const {name}=this.props.userName
        return (
            <div className="quoteLetsImagine">
                <p>{this.props.name} already belong to a studio, have a <br></br> seniority and probably already work on specific  <br></br> proyect. To understand this better</p>
                <p className="textImagine"><span>Let´s imagine!</span></p>
                <p>First we need to create our <span>fictional character!</span></p>
            </div>
        )
    }
}