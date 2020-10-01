import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './ButtonNext.css'

const ButtonNext = (getUrl) => {

    const [link,valueLink]=useState('');

        console.log("herer", getUrl)
    
//    const   getLink = (name) => {
//         this.setState({ name })
//     };
    return (
        <>
             {/* <Link value="Previous" className="buttonNext">Previous</Link> */}
            <Link to={getUrl} value="Next" className="buttonNext">Next</Link >
        </>
    )
}
export default ButtonNext;