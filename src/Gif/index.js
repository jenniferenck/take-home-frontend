import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = { hovering: false };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState(st => ({
      hovering: !st.hovering
    }));
  }
  render() {
    return (
      <div className="gif" onClick={() => this.props.handleClick(this.props)}>
        <i
          className={
            this.state.hovering ? 'far fa-heart' : 'far fa-heart-hidden'
          }
        />
        <img
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}
          className={this.state.hovering ? 'hovering' : ''}
          src={this.props.imageUrl}
          alt={this.props.title}
        />
      </div>
    );
  }
}

export default Gif;
