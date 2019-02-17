import React, { Component } from 'react';
import video from '../MVI_9893.mp4';

export default class Parra extends Component {

  render() {
    return (
        <div className='parrallax'>
            <video src={video} id='background-video' autoPlay loop muted />
            <div className='localImage' />
          </div>
    );
  }
}
