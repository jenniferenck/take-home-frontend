import React, { Component } from 'react';
import './GiphModal.css';

class GiphModal extends Component {
  render() {
    const { currentGif, handleClose } = this.props;
    console.log(currentGif);
    return (
      <div className="modal">
        <h3>Title: {currentGif.title}</h3>
        <h3>Rating: {currentGif.rating}</h3>
        <h3>Source: {currentGif.source}</h3>

        <button onClick={handleClose}>close</button>
      </div>
    );
  }
}

export default GiphModal;
