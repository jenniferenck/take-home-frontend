import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { favorited: false };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite(evt) {
    // console.log('double tapped!');
    this.setState(st => ({ favorited: !st.favorited }));
  }

  render() {
    console.log(this.state.favorited);
    const { title, source, imageUrl, rating } = this.props;
    return (
      <div className="gif" onDoubleClickCapture={this.handleDoubleTap}>
        <img src={imageUrl} alt={title} />
        <div className="text-overlay">
          <i
            onClick={this.toggleFavorite}
            className={`far fa-heart ${
              this.state.favorited ? 'favorited' : ''
            }`}
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
