import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome.png';
import './App.css';
import InputUser from './components/inputUser/InputUser'
import LetsImagine from './components/letsImagine/LetsImagine'
import ButtonNext from './components/buttonNext/ButtonNext'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }


  userName = (name) => {
    console.log('aqui ' + name);
    this.setState({ name })
  };

  render() {
    return (
      <div className="content">
        <div className="content-child">
          <h1 className="welcome-title">So excited to have you on board! </h1>
          <img src={welcomeImage} alt="welcome" className="image-welcome" />
          <InputUser userName={this.userName} />

        
           <Router>
            <button>
              <Link to={'/letsImagine'}>Next</Link>
            </button>
            <Switch>
             <Route exact path='/' component={App}></Route>
              <Route path='/letsImagine' component={LetsImagine}></Route> 
            </Switch>
          </Router>
        </div>



      </div>
    );
  }
}
export default App;
