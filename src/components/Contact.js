import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='section'>
        <h4><span id='section5' /> Contact </h4>
        <hr />
          <div className='contactPage'>
          <div className='contactInfo'>
            <div className='directions'>
              <button><a target="_blank" rel="noopener noreferrer" href='https://maps.google.com/?q=1131 2nd Avenue, Rockford, Illinois, 61104'>Get directions to Nicholson Hardware</a> </button>
              <button><a target="_blank" rel="noopener noreferrer" href='https://maps.google.com/?q=1009 3rd Avenue, Rockford, Illinois, 61104'> Get directions to Home and Garden</a></button>
            </div>
          </div>
            <div className='contactLeft'>
            <p><a href='mailto:n.hardware@comcast.net'> Email: n.hardware@comcast.net </a></p>
            <p><a href='tel:1-815-963-4821'> Phone: (815) 963-4821 </a></p>
            <p> Fax: (815) 963-4823 </p>
            <p> Hours: Monday-Saturday 7:30 a.m.-5:30 p.m. | Closed on Sundays</p>
            <p> 1131 2nd Avenue | Rockford, Illinois 61104 </p>
            </div>

          </div>
      </div>
    );
  }
}
