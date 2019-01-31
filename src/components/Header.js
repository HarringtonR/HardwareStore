import React, { Component } from 'react';


export default class Header extends Component {
  render() {
    return (
      <div className='header'>
      
        <div className='yellowbox'>
          <div className='toolbox'>
            <img src ='https://imgur.com/8xJyHOH.png'/>
          </div>
          <div className='title'>
            <h1> Nicholsons </h1>
            <h2> Hardware </h2>
          </div> 
        </div>
        <div className='navbar'>
          <ul>
            <li>DEPARTMENTS</li>
            <li>SERVICES</li>
            <li>BRANDS</li>
            <li>STORE INFO/ DIRECTIONS</li>
            <li>CONTACT </li>
          </ul>
        </div>
      </div>
    );
  }
}
