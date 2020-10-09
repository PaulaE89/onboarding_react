import React, { Component, useState } from 'react';
import './Studios.css';
import Carousel from 'react-bootstrap/Carousel';
import foundation from '../../assets/foundation.PNG';
import speciality from '../../assets/speciality.PNG';
import strategic from '../../assets/strategic.PNG';


import { Link } from 'react-router-dom';

const Studios = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

       <div className="main-studio">
            <h1 className="title-studios">Classes-Studios</h1>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-studios">
                    <Carousel.Item>
                    <h3>STRATEGIC</h3>
                        <img
                            className="d-block w-25 m-auto"
                            src={strategic}
                            alt="First slide"
                        />
                     
                    </Carousel.Item>
                    <Carousel.Item>
                    <h3>SPECIALITY</h3>
                        <img
                            className="d-block w-25 m-auto"
                            src={speciality}
                            alt="Second slide"
                        />
                     
                    </Carousel.Item>
                    <Carousel.Item>
                    <h3>FOUNDATION</h3>
                        <img
                            className="d-block w-25 m-auto"
                            src={foundation}
                            alt="Third slide"
                        />
                     
                    </Carousel.Item>
               </Carousel>
            </div>

            <div className="buttons buttons--studios">
                <Link to={{ pathname: '/letsImagine' }} className="button_previous " >Previous</Link>
                <Link to={{ pathname: '/careerPath' }} className="button_next" >Next</Link>
            </div>
        </div>

    )
}



export default Studios;
