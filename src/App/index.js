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
      activeModal: false,
      activeGif: ''
    };
    this.fetchGifs = this.fetchGifs.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
    this.toggleModalView = this.toggleModalView.bind(this);
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

  // if a gif is clicked on, an obj with gif info is passed through to be displayed in modal
  toggleModalView(gif) {
    console.log('close clicked', gif);
    if (gif) {
      this.setState({ activeModal: true, activeGif: gif });
    } else {
      console.log('inside else!');
      this.setState({ activeModal: false, activeGif: '' });
    }
  }

  render() {
    const { recentSearchGifs, trendingGifs, activeGif } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's get Giphy</h2>
        </div>
        <SearchBar
          handleSearch={this.fetchGifs}
          handleReset={this.clearSearchResults}
        />
        {this.state.activeModal ? (
          <GiphModal
            currentGif={activeGif}
            handleClose={this.toggleModalView}
          />
        ) : null}
        <GifList
          gifs={this.state.activeSearch ? recentSearchGifs : trendingGifs}
          handleClick={this.toggleModalView}
        />
      </div>
    );
  }
}

export default App;
