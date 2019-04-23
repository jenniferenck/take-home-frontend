import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {
  render() {
    return (
      <div className="gif" onClick={() => this.props.handleClick(this.props)}>
        <img src={this.props.imageUrl} alt={this.props.title} />
      </div>
    );
  }
}

export default Gif;
