import React, { Component } from 'react';
import './CareerPath.css';
import careerpathCharacter from '../../assets/careerpath-character.png';

import Collapsible from 'react-collapsible';




const CareerPath = () => {

    return (

        < div className="containerCollapsible">

            <div className="imageCollapsible">

                <img src={careerpathCharacter} alt="careerPathCharacter"></img>

            </div>


            <div className="careersCollapsible">


                <Collapsible trigger="INITIAL AND MID LEVEL">

                    <ul>
                        <li>Junior</li>
                        <li>Junior ADV</li>
                        <li>Semi Senior</li>
                        <li>Semi Senior ADV</li>
                    </ul>
                </Collapsible>



                <Collapsible trigger="SENIOR">

                    <ul>
                        <li>Senior</li>
                        <li>Software Designer</li>
                        <li>Architect</li>
                    </ul>

                </Collapsible>



                <Collapsible trigger="EXPERT & MGN">


                    <ul>
                        <li>Subject Matter Expert</li>
                        <li>Subject Matter Expert</li>
                        <li>Subject Matter Expert</li>
                        <li>Technical Director</li>
                        <li>Technical Director</li>
                        <li>Technical Manager</li>
                    </ul>

                </Collapsible>

                <Collapsible trigger="Senior MGMT">
                    <ul>
                        <li>Studio Partner</li>
                        <li>CTO</li>
                        <li>VP TECH</li>
                    </ul>
                </Collapsible>








            </div>



        </div>
    )


}

export default CareerPath;