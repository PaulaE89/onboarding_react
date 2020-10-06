import React, { Component } from 'react';
import './fci.css';
import fciImage from '../../assets/fciImage.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const fci = () => {

   
   

    return (
        <div className="mainCollapsible">

            < div className="containerCollapsible">
                <div>
                    <p className="titleCareerPath">Globant Values & FCI3 </p>

                </div>
                <div className="imageCollapsible">
                    <img src={fciImage} alt="careerPathCharacter"></img>
                </div>
                <div className="careersCollapsible">
                    <Collapsible trigger="Excellence in your work" className="initial" classname="prueba">
                        <ul>
                            <li>Focused</li>
                            <li>Commited</li>
                            
                        </ul>
                    </Collapsible>
                    <Collapsible trigger="Act Ethically" className="senior">
                        <ul>
                            <li>Integrity</li>
                          
                        </ul>
                    </Collapsible>
                    <Collapsible trigger="Constantly Innovate & Think Big" className="expert">
                        <div className="expertlist">
                            <ul className="exp">
                                <li>Fast Learner</li>
                                <li>Clear Thinker</li>
                                <li>Innovate</li>
                            </ul>
                           
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Team Player & Have Fun" className="seniormgmt">
                        <ul>
                            <li>Flexible </li>
                            <li>Collaborative</li>
                            <li>Inclusive</li>
                        </ul>
                    </Collapsible>
                </div>
            </div>

            <div className="buttons buttons--careerpath">
                <Link to={{ pathname: '/triForce' }} className="button_previous button_previous--careerpath" >Previous</Link>
                <Link to={{ pathname: '/triForce' }} className="button_next button_next--careerpath" >Next</Link>
            </div>
        </div>
    )
}

export default fci;