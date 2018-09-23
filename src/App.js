import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="cent">
          <div className="c1">
            <h2>Facebook membantu Anda terhubung dan berbagi dengan orang-orang dalam kehidupan Anda.</h2>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GwFs3_KxNjS.png"></img>
            <Form />


          </div>
        </div>
      </div>
    );
  }
}

export default App;
