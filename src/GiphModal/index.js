import React, { Component } from 'react';
import './GiphModal.css';

class GiphModal extends Component {
  render() {
    return (
      <div className="modal">
        placeholder for the giph info on click
        <button onClick={this.props.handleClose}>close</button>
      </div>
    );
  }
}

export default GiphModal;
