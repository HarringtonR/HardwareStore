import React, { Component } from 'react';
import '../css/departments.css';

export default class Departments extends Component {
  render() {
    return (
      <div className='departments' >
            <h4><span id='section1'/> DEPARTMENTS </h4>
        <hr />
            <div className='container'>
                <div className='tools box'>
                    <div className='toolsImage' />
                    <div className='boxText'>
                        <h4>Tools</h4>
                        <p> Offering a complete line of quality hand or power tools to get the job done. </p>
                    </div>
                </div>
                <div className='paint box'>
                <div className='paintsImage' />
                    <div className='boxText'>
                        <h4>Paints</h4>
                        <p> We stock a wide selection of paint, stain, finish, and paint sundries for all your painting needs.</p>
                    </div>
                </div>
                <div className='plumbing box'>
                <div className='plumbingImage' />
                    <div className='boxText'>
                        <h4>Plumbing</h4>
                        <p>  One of the largest selections of faucet, valve, and toilet repair items in Northern Illinois. </p>
                    </div>
                </div>
                <div className='fasteners box'>
                <div className='fastenersImage' />
                    <div className='boxText'>
                        <h4>Fasteners</h4>
                        <p> Our extensive inventory of hardware fasteners is unsurpassed in the area. </p>
                    </div>
                </div>
                <div className='builders box'>
                <div className='buildersImage' />
                    <div className='boxText'>
                        <h4>Builders Hardware</h4>
                        <p> You will find all your solutions in our lock and key Builders’ Hardware department. </p>
                    </div>
                </div>
                <div className='electrical box'>
                <div className='electricalImage' />
                    <div className='boxText'>
                        <h4>Electrical</h4>
                        <p> Complete electrical department providing all electrical components.</p>
                    </div>
                </div>
                <div className='lawn box'>
                <div className='lawnImage' />
                    <div className='boxText'>
                        <h4>Lawn/Garden</h4>
                        <p> Mowers, power and hand tools, snow blowers, and other outdoor maintenance needs. </p>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
