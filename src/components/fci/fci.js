import React, { Component } from 'react';
import './fci.css';
import fciImage from '../../assets/fciImage.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const fci = () => {

    return (
        <div className="mainCollapsible">
                <div>
                    <p className="titleFCI">Globant Values & FCI3 </p>
                </div>
            < div className="containerCollapsibleFci">
               
                <div className="imageDragonCollapsible">
                    <img src={fciImage} alt="careerPathCharacter"></img>
                </div>
                <div className="fciCollapsible">
                    <Collapsible trigger="Excellence in your work & Act Ethically" className="excellenceAct">
                        <ul className="excellence">
                            <li><span>F</span>ocused</li>
                            <li><span>C</span>ommited</li> 
                            <li><span>I</span>ntegrity</li> 
                        </ul>
                    </Collapsible>
                    <Collapsible trigger="Constantly Innovate & Think Big" className="constInnov">
                            <ul className="constantly">
                                <li><span>F</span>ast Learner</li>
                                <li><span>C</span>lear Thinker</li>
                                <li><span>I</span>nnovate</li>
                            </ul>
                    </Collapsible>
                    <Collapsible trigger="Team Player & Have Fun" className="teamPlayer">
                        <ul className="team">
                            <li><span>F</span>lexible </li>
                            <li><span>C</span>ollaborative</li>
                            <li><span>I</span>nclusive</li>
                        </ul>
                    </Collapsible>
                </div>
            </div>

            <div className="buttons buttons--careerpath">
                <Link to={{ pathname: '/triForce' }} className="button_previous button_previous--careerpath" >Previous</Link>
                <Link to={{ pathname: '/keyPeople' }} className="button_next button_next--careerpath" >Next</Link>
            </div>
        </div>
    )
}

export default fci;