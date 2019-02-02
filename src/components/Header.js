import React, { Component } from 'react';
import Title from './Title';
import Headroom from 'react-headroom';

export default class Header extends Component {
  render() {
    return (
      <Headroom
      wrapperStyle
      upTolerance={50}
      >
            <Title/>
          <div className='nav'>
            <ul>
              <a className='department transform' href='#section1'><li>Departments</li></a>
              <a className='services transform' href=''><li>Services</li></a>
              <a className='vendors transform' href='#section2'><li>Vendors</li></a>
              <a className='storeInformation transform'href=''><li>Store Info / Directions </li></a>
              <a className='contact transform' href=''><li>Contact</li></a>
            </ul>
          </div>
    </Headroom>
    );
  }
}
