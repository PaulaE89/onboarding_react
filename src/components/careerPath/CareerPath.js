import React, { Component } from 'react';
import './CareerPath.css';
import careerpathCharacter from '../../assets/careerpath-character.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const CareerPath = (nameUser) => {

    console.log("careerpath", nameUser.location.nameUser);
    const userName = nameUser.location.nameUser;

    return (
        <>

            < div className="containerCollapsible">
                <div>
                    <p className="titleCareerPath">Career Path </p>

                </div>
                <div className="imageCollapsible">
                    <img src={careerpathCharacter} alt="careerPathCharacter"></img>
                </div>
                <div className="careersCollapsible">
                    <Collapsible trigger="INITIAL AND MID LEVEL" className="initial" classname="prueba">
                        <ul>
                            <li>Junior</li>
                            <li>Junior ADV</li>
                            <li>Semi Senior</li>
                            <li>Semi Senior ADV</li>
                        </ul>
                    </Collapsible>
                    <Collapsible trigger="SENIOR" className="senior">
                        <ul>
                            <li>Senior</li>
                            <li>Software Designer</li>
                            <li>Architect</li>
                        </ul>
                    </Collapsible>
                    <Collapsible trigger="EXPERT & MGN" className="expert">
                        <div className="expertlist">
                            <ul className="exp">
                                <li>Subject Matter Expert</li>
                                <li>Subject Matter Expert</li>
                                <li>Subject Matter Expert</li>
                            </ul>
                            <ul className="exp">
                                <li>Technical Director</li>
                                <li>Technical Director</li>
                                <li>Technical Manager</li>
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible trigger="Senior MGMT" className="seniormgmt">
                        <ul>
                            <li>Studio Partner</li>
                            <li>CTO</li>
                            <li>VP TECH</li>
                        </ul>
                    </Collapsible>
                </div>
            </div>

            <div className="buttons">
                <Link to={{ pathname: '/letsImagine' }} className="button_previous" >Previous</Link>
                <Link to={{ pathname: '/triForce', userName }} className="button_next" >Next</Link>
            </div>
        </>
    )
}

export default CareerPath;