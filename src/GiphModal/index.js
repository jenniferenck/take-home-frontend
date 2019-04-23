import React, { Component } from 'react';
import './GiphModal.css';

class GiphModal extends Component {
  render() {
    const { currentGif, handleClose } = this.props;
    console.log(currentGif);
    return (
      <div className="modal">
        <div>
          <h3>Title:</h3>
          <p>{currentGif.title}</p>
        </div>
        <div>
          <h3>Rating:</h3>
          <p>{currentGif.rating}</p>
        </div>
        <div>
          <h3>Source:</h3>
          <p>
            {currentGif.source.length ? currentGif.source : 'Not available'}
          </p>
        </div>

        <button className="close-button" onClick={handleClose}>
          close
          <br />x
        </button>
      </div>
    );
  }
}

export default GiphModal;
