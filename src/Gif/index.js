import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { hovering: false };
    this.handletoggleHover = this.handletoggleHover.bind(this);
    this.handleDoubleTap = this.handleDoubleTap.bind(this);
  }

  handletoggleHover() {
    this.setState(st => ({
      hovering: !st.hovering
    }));
  }

  handleDoubleTap(evt) {
    evt.preventDefault();
    console.log('double tapped!');
  }

  render() {
    const { title, source, imageUrl, rating } = this.props;
    return (
      <div className="gif" onDoubleClickCapture={this.handleDoubleTap}>
        {/* <i
          className={
            this.state.hovering ? 'far fa-heart' : 'far fa-heart-hidden'
          }
        /> */}
        <img
          className={this.state.hovering ? 'hovering' : ''}
          src={imageUrl}
          alt={title}
        />
        <div className="text-overlay">
          <div>
            <h4>Title:</h4>
            <p>{title}</p>
          </div>
          <div>
            <h4>Rating:</h4>
            <p>{rating}</p>
          </div>
          <div className="source">
            <h4>Source:</h4>
            <p>{source.length ? source : 'Not available'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
