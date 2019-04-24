import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  // add or remove from state and add/ remove from localstorage and array in app component
  toggleFavorite(evt) {
    console.log('previous favorite state:', this.props.favorited);
    // pass the opposite of the current state to tell the add or remove whether to remove or add
    this.props.handleAddOrRemoveFav(this.props, !this.props.favorited);
  }

  render() {
    // console.log('gif props', this.props);
    const { title, source, imageUrl, rating, favorited } = this.props;
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
            <p>{title.length ? title : 'Not available'}</p>
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
