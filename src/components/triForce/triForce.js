import React, { useState } from 'react';
import cope_image from '../../assets/cope_image.png';
import ui_studio from '../../assets/ui_studio.png';
import account from '../../assets/account.png'
import './triForce.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const triForce = (userName) => {

    console.log(userName);

    return (
        <div className="triforcePage">

            <h1>The triforce</h1>
            <h3>{userName.location.userName}, you are here</h3>

            <div>

                <Tabs className="tabsModule">
                    <TabList>
                        <Tab className="exp">Expertise</Tab>
                        <Tab className="site">Site</Tab>
                        <Tab className="buss">Bussiness</Tab>
                    </TabList>
                    <TabPanel className="tabContent">
                        <img src={ui_studio} alt="ui_studio" />
                    </TabPanel>
                    <TabPanel className="tabContent">
                        <img src={cope_image} alt="cope_image" />
                    </TabPanel>
                    <TabPanel className="tabContent">
                    <img src={account} alt="account" />
                    </TabPanel>
                </Tabs>
            </div>

            <div className="buttons">
                    <Link to={{ pathname: '/careerPath' }} className="button_previous" >Previous</Link>
                    <Link to={{ pathname: '/', userName }} className="button_next" >Next</Link>
                </div>
        </div>
    )
}
export default triForce;