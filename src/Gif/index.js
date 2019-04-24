import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  // pass the opposite of the current state to tell the add or remove whether to remove or add
  toggleFavorite(evt) {
    this.props.handleAddOrRemoveFav(this.props, !this.props.favorited);
  }

  render() {
    const { title, imageUrl, rating, favorited } = this.props;
    return (
      <div className="gif" onDoubleClickCapture={this.handleDoubleTap}>
        <img src={imageUrl} alt={title} />
        <div className="text-overlay">
          <i
            onClick={this.toggleFavorite}
            className={`far fa-heart ${favorited ? 'favorited' : ''}`}
          />
          <div>
            <h4>Title:</h4>
            <p>{title ? title : 'Not available'}</p>
          </div>
          <div>
            <h4>Rating:</h4>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
