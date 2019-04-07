import React, { Component } from 'react';
import Header from './components/Header';
import InfoPictures from './components/Carousel';
import Parra from './components/Parra';
import Footer from './components/Footer';
import Departments from './components/Departments';
import Vendors from './components/Vendors';
import Contact from './components/Contact';
import History from './components/History';
import './App.css';
import './css/section.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Parra />
       <InfoPictures />
       <Departments />
       <Vendors />
       <History />
       <Contact />
      </div>
    );
  }
}

export default App;
