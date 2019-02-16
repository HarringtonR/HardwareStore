import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className='section' id='section5'>
        <h4> Contact </h4>
        <hr />
          <div className='contactPage'>
            <div className='maps'>
            </div>
            <div className='Inquiries'>
              <h5>Inqueries</h5>
              <p>For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the following form</p>
            </div>
            <div>
              <h5>Employement</h5>
              <p>To apply for a job with Sphere Constuctions, please send a cover letter together with your C.V. to: info@mysite.com</p>
            </div>
          </div>
      </div>
    );
  }
}
