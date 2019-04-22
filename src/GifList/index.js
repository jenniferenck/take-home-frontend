import React, { Component } from 'react';
import Gif from '../Gif';

class GifList extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { trendingGifs: [], recentSearchGifs: [] };
  //   }
  render() {
    //   check 1st if there is an active search going on
    // if no active search, check if trendingGifs array has anything yet?
    return (
      <div>{this.props.gifs.length ? <Gif /> : <h2>Gifs Loading...</h2>}</div>
    );
  }
}

export default GifList;
