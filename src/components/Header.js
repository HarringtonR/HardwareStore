import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div className='header'>
          <div className='title'>
            <h1> NICHOLSON </h1>
            <h3> HARDWARE </h3>
            <p> Have a Question?  (815) 963-4821 Mon-Sat 7:30am - 530pm </p>
          </div> 
        <div className='nav'>
          <ul>
            <a className='departments transform' href=''><li>Departments</li></a>
            <a className='services transform' href=''><li>Services</li></a>
            <a className='brands transform' href=''><li>Brands</li></a>
            <a className='storeInformation transform'href=''><li>Store Info / Directions </li></a>
            <a className='contact transform' href=''><li>Contact</li></a>
          </ul>
        </div>
      </div>
    );
  }
}
