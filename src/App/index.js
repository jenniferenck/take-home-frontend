import React, { PureComponent } from 'react';

import './App.css';
import GifList from '../GifList';
import SearchBar from '../SearchBar';
import GiphyApi from '../GiphyApi';
import GiphModal from '../GiphModal';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      trendingGifs: [],
      recentSearchGifs: [],
      activeSearch: false,
      activeModal: false
    };
    this.fetchGifs = this.fetchGifs.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
  }

  // on initial page load, fetch trending Gifs
  async componentDidMount() {
    const trendingGifs = await GiphyApi.fetchTrendingGifs();
    this.setState({ trendingGifs: trendingGifs.data });
    console.log('trending:', trendingGifs.data);
  }

  // API request for gifs that meet search term
  async fetchGifs(searchTerm) {
    this.setState({ activeSearch: true });
    const searchResults = await GiphyApi.fetchGifs(searchTerm);
    this.setState({ recentSearchGifs: searchResults.data });
    console.log('search results:', searchResults.data);
  }

  clearSearchResults() {
    this.setState({ activeSearch: false, recentSearchGifs: [] });
  }

  render() {
    const { recentSearchGifs, trendingGifs } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's get Giphy</h2>
        </div>
        <SearchBar
          handleSearch={this.fetchGifs}
          handleReset={this.clearSearchResults}
        />
        {this.state.activeModal ? <GiphModal /> : null}
        <GifList
          gifs={this.state.activeSearch ? recentSearchGifs : trendingGifs}
        />
      </div>
    );
  }
}

export default App;
