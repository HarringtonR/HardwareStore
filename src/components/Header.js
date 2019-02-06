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
              <a className='department transform' href='#section1'><li>Departments<img src='https://imgur.com/U9IsugV.png' /></li></a>
              <a className='services transform' href=''><li>Services<img src='https://imgur.com/jd1WSpy.png' /></li></a>
              <a className='vendors transform' href='#section2'><li>Vendors<img src='https://imgur.com/SWtaqNf.png' /></li></a>
              <a className='storeInformation transform'href=''><li>Store Info <img src='https://imgur.com/7lmy7gO.png' /></li></a>
              <a className='contact transform' href=''><li>Contact <img src='https://imgur.com/1DE7uOz.png' /></li> </a>
            </ul>
          </div>
    </Headroom>
    );
  }
}
