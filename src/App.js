import React, { Component } from 'react';
import welcomeImage from './assets/welcome.png';
import './App.css';

class App extends Component {
  render() {


    return (

      <div className="row d-flex justify-content-center">

        <div className="col-md-12">
          <p className="welcome-title">So exicted to have you on board</p>
        
          <img src={welcomeImage} />
        </div>
      </div>

    );

  }
}
export default App;
