import React, { PureComponent } from 'react';

import './App.css';
import GifList from '../GifList';
import SearchBar from '../SearchBar';

class App extends PureComponent {
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

  fetchGifs = searchTerm => {
    // API request for gifs that meet search term
    // set state of activeSearch to true
    // once results come in, setState of recentSearchGifs to equal results
  };

  render() {
    const { recentSearchGifs, trendingGifs } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's get Giphy</h2>
        </div>
        <SearchBar handleSearch={this.fetchGifs} />
        <GifList
          gifs={this.state.activeSearch ? recentSearchGifs : trendingGifs}
        />
      </div>
    );
  }
}

export default App;
