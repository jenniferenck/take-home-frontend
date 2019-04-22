import React, { Component } from 'react';

import './App.css';
import GiphList from '../GiphList';
import SearchBar from '../SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingGifs: [],
      recentSearchGifs: [],
      activeSearch: false
    };
  }

  // on initial page load, fetch trending Gifs
  componentDidMount() {
    // API request to giphy for most current gifs
  }

  render() {
    const { recentSearchGifs, trendingGifs } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's get Giphy</h2>
        </div>
        <SearchBar />
        <GiphList
          gifs={this.state.activeSearch ? recentSearchGifs : trendingGifs}
        />
      </div>
    );
  }
}

export default App;
