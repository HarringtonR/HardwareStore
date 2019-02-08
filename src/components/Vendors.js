import React, { Component } from 'react';
import '../css/Brands.css';
import Tools from './vendorLists/Tools';
import Plumbing from './vendorLists/Plumbing';
import BuildersHardware from './vendorLists/BuildersHardware';
import Electrical from './vendorLists/Electrical';
import Fasteners from './vendorLists/Fasteners';
import LawnAndGarden from './vendorLists/LawnAndGarden';
import Paints from './vendorLists/Paints';

export default class Vendors extends Component {
  render() {
    return (
      <div className='vendorsSection' id='section2'>
        <h4> Vendors </h4>
        <hr />
        <div className='vendorsPage'>
          <Tools/>
          <Plumbing />
          <BuildersHardware />
          <Electrical />
          <Fasteners />
          <LawnAndGarden />
          <Paints />
          <Plumbing />
        </div>
      </div>
    );
  }
}
