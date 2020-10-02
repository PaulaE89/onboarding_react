import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LetsImagine from './components/letsImagine/LetsImagine';
import Welcome from './components/welcome/Welcome';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CareerPath from './components/careerPath/CareerPath';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/letsImagine' component={LetsImagine} />
            <Route path='/careerPath' component={CareerPath}/>
          </Switch>
        </Router>
   
  
      </div>
      
    );

  }
}
export default App;
