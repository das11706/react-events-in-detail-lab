// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends React.Component {

  updateDelay = (event) => {
    event.persist()
    // setTimeout(() => this.props.onDelayedClick(event), this.props.delay )
    setTimeout(() => this.props.onDelayedClick(event) ) = this.props.delay
  }

  render () {
    return(
      <button onClick={this.updateDelay}></button>
    )
  }
}

export default DelayedButton;

