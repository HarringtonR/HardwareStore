import React, { Component } from 'react';
import '../css/departments.css';

export default class Departments extends Component {
  render() {
    return (
      <div className='departments' id='section1'>
        <h4> DEPARTMENTS </h4>
        <hr />
            <div className='container'>
                <div className='tools box'>
                    <div className='toolsImage' />
                    <div className='boxText'>
                        <h4>Tools</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
                <div className='paint box'>
                <div className='paintsImage' />
                    <div className='boxText'>
                        <h4>Paints</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
                <div className='plumbing box'>
                <div className='plumbingImage' />
                    <div className='boxText'>
                        <h4>Plumbing</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
                <div className='fasteners box'>
                <div className='fastenersImage' />
                    <div className='boxText'>
                        <h4>Fasteners</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
                <div className='builders box'>
                <div className='buildersImage' />
                    <div className='boxText'>
                        <h4>Builders Hardware</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
                <div className='electrical box'>
                <div className='electricalImage' />
                    <div className='boxText'>
                        <h4>Electrical</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
                <div className='lawn box'>
                <div className='lawnImage' />
                    <div className='boxText'>
                        <h4>Lawn/Garden</h4>
                        <p> I'm a paragraph. Click here to add your own text and edit me. </p>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
