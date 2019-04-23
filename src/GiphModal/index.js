import React, { Component } from 'react';
import './GiphModal.css';

class GiphModal extends Component {
  render() {
    const { currentGif, handleClose } = this.props;
    console.log(currentGif);
    return (
      <div className="modal">
        <h3>Title:</h3>
        <p>{currentGif.title}</p>
        <h3>Rating:</h3>
        <p>{currentGif.rating}</p>
        <h3>Source:</h3>
        <p>{currentGif.source}</p>

        <button className="close-button" onClick={handleClose}>
          close
          <br />x
        </button>
      </div>
    );
  }
}

export default GiphModal;
