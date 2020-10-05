import React, { useState } from 'react';
import cope_image from '../../assets/cope_image.png';
import ui_studio from '../../assets/ui_studio.png';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const triForce = (userName) => {

    console.log(userName);

    return (
        <div>

            <h2>The triforce</h2>
            <h3>{userName.location.userName}, you are here</h3>

            <div>

                <Tabs>
                    <TabList>
                        <Tab>Expertise</Tab>
                        <Tab>Site</Tab>
                        <Tab>Bussiness</Tab>
                    </TabList>
                    <TabPanel>
                        <h2>Expertise</h2>
                        <img src={ui_studio} alt="ui_studio" />
                    </TabPanel>
                    <TabPanel>
                        <h2>Site</h2>
                        <img src={cope_image} alt="cope_image" />
                    </TabPanel>
                    <TabPanel>
                        <h2>Bussiness</h2>
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