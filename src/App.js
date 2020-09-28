import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome.png';
import './App.css';
import InputUser from './components/inputUser/InputUser'
import LetsImagine from './components/letsImagine/LetsImagine'
import ButtonNext from './components/buttonNext/ButtonNext';
import Welcome from './components/welcome/Welcome'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/letsImagine' component={LetsImagine} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
