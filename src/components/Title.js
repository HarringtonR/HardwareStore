import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    return (
            <div className='title'>
                <a href='#top'>
                    <h1> NICHOLSON </h1>
                    <h4> HARDWARE </h4>
                </a>
        <p className='subTitle'> <span>Have a Question?</span> <span><a href='tel:1-815-963-4821'>Give us a call! (815) 963-4821 </a></span> <span>Mon-Sat 7:30am - 5:30pm</span>  <span><a target="_blank" rel="noopener noreferrer" href='https://maps.google.com/?q=1131 2nd Avenue, Rockford, Illinois, 61104'>Get Directions</a></span></p>
            </div>
    );
  }
}
