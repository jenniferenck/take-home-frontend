import React, { PureComponent } from 'react';

import './App.css';
import GifList from '../GifList';
import SearchBar from '../SearchBar';
import GiphyApi from '../GiphyApi';

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
  async componentDidMount() {
    // API request to giphy for most current gifs
    const trendingGifs = await GiphyApi.fetchTrendingGifs();
    this.setState({ trendingGifs: trendingGifs.data });
    console.log('trending:', trendingGifs.data);
  }

  fetchGifs = searchTerm => {
    this.setState({ activeSearch: true });
    // API request for gifs that meet search term
    // set state of activeSearch to true
    // once results come in, setState of recentSearchGifs to equal results
  };

  clearSearchResults = () => {
    this.setState({ activeSearch: false });
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
