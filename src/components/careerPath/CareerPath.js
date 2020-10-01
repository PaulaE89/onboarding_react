import React, { Component } from 'react';
import './CareerPath.css';
import careerpathCharacter from '../../assets/careerpath-character.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Collapsible from 'react-collapsible';




const CareerPath = () => {

    return (

        < div className="containerCollapsible">

            <div className="imageCollapsible">

                <img src={careerpathCharacter} alt="careerPathCharacter"></img>

            </div>


            <div className="careersCollapsible">


                <Collapsible trigger="INITIAL AND MID LEVEL" className="initial">

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


                    <ul>
                        <li>Subject Matter Expert</li>
                        <li>Subject Matter Expert</li>
                        <li>Subject Matter Expert</li>
                        <li>Technical Director</li>
                        <li>Technical Director</li>
                        <li>Technical Manager</li>
                    </ul>

                </Collapsible>

                <Collapsible trigger="Senior MGMT" className="seniormgmt">
                    <ul>
                        <li>Studio Partner</li>
                        <li>CTO</li>
                        <li>VP TECH</li>
                    </ul>
                </Collapsible>








            </div>


            <Link to={{ pathname: '/letsImagine' }} className="button_previous enter_user" >Previous</Link>

              



        </div>
    )


}

export default CareerPath;