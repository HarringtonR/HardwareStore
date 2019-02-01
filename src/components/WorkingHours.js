import React, { Component } from 'react';


export default class WorkingHours extends Component {
  state = {
    open: false
  }


  componentDidMount(){
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDay();

    if(hour < 17 && hour > 7 && day !== 7){
      this.setState({
        open: true
      })
      console.log('open')
    } else {
      console.log('closed')
    }
  };

  renderOpen(){
    if(this.state.open){
      return (
        <p>NOW OPEN</p>
      )
    } else {
      return (
      <p>Closed Until Tomorrow</p>
      )
    }
  }


  render() {
    return (
            <div className='info'>
              <h4>See what's happening</h4>
                <hr />
              <p>at Nicholson Hardware on 2nd Ave.</p>
              {this.renderOpen()}
          </div>
    );
  }
}
