import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from './assets/welcome.png';
import './App.css';
import InputUser from './components/inputUser/InputUser'
import LetsImagine from './components/letsImagine/LetsImagine'

export class App extends Component {

  constructor(props){

    super(props)
    this.state={
        name: ''
    }

}



  userName=(name)=>{console.log('aqui '+ name);

  this.setState({name})
};



  render() {



    return (


      <div className="content">

        <div className="content-child">

          <h1 className="welcome-title">So excited to have you on board! </h1>

          <img src={welcomeImage} alt="welcome" className="image-welcome" />
          
        <InputUser userName={this.userName}/>

        <LetsImagine name={this.state.name}/>
         
        </div>

      </div>

    );

  }
}
export default App;
