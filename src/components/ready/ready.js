import React, { Component } from 'react';
import './ready.css'

import { Link } from 'react-router-dom';

const ready = () => {

    return (
        <>
            <a href="https://www.globant.com" target="_blank">
                <div className="image-ready">
                </div>
                <div className="buttons buttons--ready">
                    <Link to={{ pathname: '/keyPeople' }} className="button_previous " >Previous</Link>
                    <Link to={{ pathname: '/ready' }} className="button_next" >Next</Link>
                </div>
            </a>
        </>
    )
}

export default ready;