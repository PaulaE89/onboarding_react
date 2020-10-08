import React, { Component, useState } from 'react';
import './Studios.css';
import Carousel from 'react-bootstrap/Carousel';
import foundation from '../../assets/foundation.jpg';
import speciality from '../../assets/speciality.jpg';
import strategic from '../../assets/strategic.jpg';


import { Link } from 'react-router-dom';

const Studios = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

       <>
            <h1>Classes-Studios</h1>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <h3>STRATEGIC</h3>
                        <img
                            className="d-block w-100"
                            src={foundation}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                          
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                    <h3>SPECIALITY</h3>
                        <img
                            className="d-block w-100"
                            src={speciality}
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                    <h3>FOUNDATION</h3>
                        <img
                            className="d-block w-100"
                            src={strategic}
                            alt="Third slide"
                        />

                        {/* <Carousel.Caption>
                          
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className="buttons buttons--ready">
                <Link to={{ pathname: '/letsImagine' }} className="button_previous " >Previous</Link>
                <Link to={{ pathname: '/careerPath' }} className="button_next" >Next</Link>
            </div>
        </>

    )
}



export default Studios;
