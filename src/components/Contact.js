import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='section'>
        <h4><span id='section5' /> Contact </h4>
        <hr />
          <div className='contactPage'>

            <div className='contactInfo'>
              <div className='inquiries'>
                <h5>Inqueries</h5>
                <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
              </div>
              <div className='directions'>
                <h5>Directions</h5>
              <p>Click<a target="_blank" href='https://maps.google.com/?q=1131 2nd Avenue, Rockford, Illinois, 61104'> HERE</a> for directions to Nicholson Hardware</p>
              <p>Click<a target="_blank" href='https://maps.google.com/?q=1009 3rd Avenue, Rockford, Illinois, 61104'> HERE </a> for directions to home and garden</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
