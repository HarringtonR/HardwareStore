import React, { Component } from 'react';
import Header from './components/Header';
import InfoPictures from './components/Carousel';
import Parra from './components/Parra';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Parra />
       <InfoPictures />
       <Footer />
      </div>
    );
  }
}

export default App;
