import React, { Component } from 'react';
import logo from './logo.svg';
import misty from './misty.jpg';
import './App.css';
import Footer from '../Footer';

class App extends Component {

  renderInformationPanel = () => {
    return (
      <h3 className='info-panel'> Hello, I'm Tyler, but I go by Teapane on the interwebzz.  This is my website. It's built with React because I like React.  It's pretty simple and using React was probably over kill but, ¯\_(ツ)_/¯.</h3>
    );
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={misty} className="App-logo" alt="logo" />
          <h2>Teapane</h2>
        </div>
        {this.renderInformationPanel()}
        <Footer />
      </div>
    );
  }
}

export default App;
