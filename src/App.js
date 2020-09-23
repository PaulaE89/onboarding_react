import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome.png';
import './App.css';
import InputUser from './components/InputUser'

class App extends Component {


  userName=(name)=>{console.log(name)};



  render() {



    return (


      <div className="content">

        <div className="content-child">

          <h1 className="welcome-title">So excited to have you on board! </h1>

          <img src={welcomeImage} alt="welcome" className="image-welcome" />
          
        <InputUser userName={this.userName}/>
         
        </div>

      </div>

    );

  }
}
export default App;
