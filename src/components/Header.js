import React, { Component } from 'react';
import Title from './Title';

export default class Header extends Component {
  render() {
    return (
        <div className='headroom'>
            <Title/>
          <div className='nav'>
            <ul>
              <a className='department transform' href='#section1'><li>Departments<img src='https://imgur.com/U9IsugV.png' alt='wrench' /></li></a>
            <a className='vendors transform' href='#section2'><li>Vendors<img src='https://imgur.com/jd1WSpy.png' alt='vendor' /></li></a>
              <a className='services transform' href='#section3'><li>Services<img src='https://imgur.com/uKoJiOg.png' alt='key' /></li></a>
              <a className='history transform' href='#section4'><li>History <img src='https://imgur.com/k9IoVW6.png' alt='info' /></li></a>
              <a className='contact transform' href='#section5'><li>Contact <img src='https://imgur.com/WgVpJwv.png' alt='mail' /></li> </a>
            </ul>
          </div>
        </div>
    );
  }
}
