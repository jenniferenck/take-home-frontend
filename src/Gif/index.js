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
      <div
        className="gif"
        onClick={() => this.props.handleClick(this.props)}
        onDoubleClickCapture={this.handleDoubleTap}
      >
        {/* <i
          className={
            this.state.hovering ? 'far fa-heart' : 'far fa-heart-hidden'
          }
        /> */}
        <img
          // onMouseEnter={this.handletoggleHover}
          // onMouseLeave={this.handletoggleHover}
          className={this.state.hovering ? 'hovering' : ''}
          src={imageUrl}
          alt={title}
        />
      </div>
    );
  }
}

export default Gif;
