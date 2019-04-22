import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} alt={this.props.title} />
      </div>
    );
  }
}

export default Gif;
