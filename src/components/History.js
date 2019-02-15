import React, { Component } from 'react';

export default class History extends Component {
  render() {
    return (
      <div className='historyContainer section' id='section4'>
        <h4> History </h4>
        <hr />
        <div className='historyWrap'>
          <div className='historyText'>
            <p> Opened in 1945, <strong>Nicholson Hardware</strong> has been owned and operated by the Nicholson Family for three generations. A commitment to serving our customers, both contractor and homeowner/do-it-yourselfer, has remained our top priority. We strive to stock a good selection of hard-to-find items and have a dedicated sales staff with many years of experience. </p>
            <p> The Hardware Store is operated out of a 25,000 sq. ft. retail space located at 1131 2nd Avenue in Rockford’s Midtown District. The Lawn and Garden portion of the business was moved one block from the Hardware Store, to 1009 3rd Avenue, to accommodate the expansion of sales and service for both commercial and homeowner lawn and garden equipment. </p>
          </div>
          <div className='historyParrallax' />
        </div>
      </div>
    );
  }
}
