import React, { Component } from 'react';
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
      <div className='section'>
        <h4><span id='section2' /> Vendors </h4>
        <hr />
        <div className='vendorsPage'>
          <Tools/>
          <BuildersHardware />
          <LawnAndGarden />
          <Plumbing />
          <Electrical />
          <Plumbing />
          <Fasteners />
          <Paints />
        </div>
      </div>
    );
  }
}
