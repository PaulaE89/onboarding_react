import React, { Component, useEffect, useState } from 'react';
import './keyPeople.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function keyPeople() {

    const people =
        [
            {
                "id": 1,
                "image": "http://drive.google.com/uc?export=view&id=1u1beNHaroWZoiCLit3e481bGn2wGbQha",

                "name": "Damian Lazzarano",
                "email": "damian.lazzarano@globant.com",
                "studio": "SP & UI STUDIO PARTNER "
            },
            {
                "id": 2,
                "image": "http://drive.google.com/uc?export=view&id=1G766UEVzO6UPr7K9QItnx5nNXZChpXH8",
                "name": "David Correa",
                "email": "david.correa@globant.com",
                "studio": "SP & UI STUDIO PARTNER "

            },
            {
                "id": 3,
                "image": "http://drive.google.com/uc?export=view&id=1C4f1RkbI5GhbqoI__DfQo8STVvdr_OF8",
                "name": "Luciana Zavaleta",
                "email": "luciana.zavaleta@globant.com",
                "studio": "UI ENGINEERING PARTNER "
            },
            {
                "id": 4,
                "image": "http://drive.google.com/uc?export=view&id=1QlQZ4EiNk6lDSpADmVMjDuDfWrhN_IXu",
                "name": "Gabriel Martinez",
                "email": "gabriel.martinez@globant.com",
                "studio": "UI TDC FOCAL TECH. DIRECTOR "
            },
            {
                "id": 5,
                "image": "http://drive.google.com/uc?export=view&id=1mKfjMbPS9Nsig1RKIQ6NJ0sQy_5jL_88",
                "name": "Sebastian Gomez",
                "email": "sebastian.gomez@globant.com",
                "studio": "UI ENGINEERING TECH.MANAGER"
            }

        ]

    console.log(people);


    return (

        <>
            <p className="titleKeyPeople">UI Studio COPE</p>
            <p className="sub-title">key people</p>
            <div className="key-people">
                {people.map((people, index) => {
                    return <div key={index} className="people">
                        <img src={people.image} />
                        <p>{people.name} </p>
                        <a href="mailto:{people.email}" >{people.email}</a>
                        <h4>{people.studio}</h4>
                    </div>
                })}
            </div>
            <div className="buttons buttons--careerpath">
                <Link to={{ pathname: '/fci' }} className="button_previous button_previous--careerpath" >Previous</Link>
                <Link to={{ pathname: '#' }} className="button_next button_next--careerpath" >Next</Link>
            </div>
        </>

    )


}

export default keyPeople;