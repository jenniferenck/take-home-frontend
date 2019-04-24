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
      favoritedGifs: {},
      activeSearch: false,
      activeModal: false,
      activeGif: {},
      currentSearchTerm: ''
    };
    this.fetchGifs = this.fetchGifs.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
    this.addOrRemoveFavorite = this.addOrRemoveFavorite.bind(this);
  }

  // on initial page load, fetch trending Gifs and check localStorage for any favorites
  async componentDidMount() {
    const trendingGifs = await GiphyApi.fetchTrendingGifs();
    this.setState({ trendingGifs: trendingGifs.data });

    // check localStorage, parse and set favorited Gifs array
    if (localStorage.favorites) {
      const storedFavorites = localStorage.getItem('favorites');
      const favoritesObj = JSON.parse(storedFavorites);
      this.setState({ favoritedGifs: favoritesObj });
      console.log('local storage on page load:', favoritesObj);
    }
  }

  // API request for gifs that meet search term
  async fetchGifs(searchTerm) {
    this.setState({ activeSearch: true });
    const searchResults = await GiphyApi.fetchGifs(searchTerm);
    this.setState({
      recentSearchGifs: searchResults.data,
      currentSearchTerm: searchTerm
    });
  }

  clearSearchResults() {
    this.setState({ activeSearch: false, recentSearchGifs: [] });
  }

  // takes a gif object, adds/removes it to/from favorited array and replaces localStorage
  // if favorite is TRUE --> add to local storage and state, if FALSE --> remove
  addOrRemoveFavorite(gifObj, favorite) {
    const newGif = {};
    newGif[gifObj.id] = gifObj;
    let newFavorites;

    if (favorite) {
      newFavorites = { ...this.state.favoritedGifs, ...newGif };
      this.setState({ favoritedGifs: newFavorites });
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      // find in favorites, replace local storage with new object
      // make a copy of current state
      newFavorites = this.state.favoritedGifs;
      delete newFavorites[newGif.id];

      this.setState({ favoritedGifs: newFavorites });
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  }

  render() {
    // console.log('local storage:', localStorage.favorites);

    const { recentSearchGifs, trendingGifs, activeGif } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search your favorite GIFs in one place!</h2>
          <SearchBar
            handleSearch={this.fetchGifs}
            handleReset={this.clearSearchResults}
          />
        </div>
        <h3 className="gif-list-header">
          {this.state.activeSearch
            ? `GIPHY results for: #${this.state.currentSearchTerm}`
            : "What's Trending..."}
        </h3>

        <GifList
          handleAddOrRemoveFav={this.addOrRemoveFavorite}
          gifs={this.state.activeSearch ? recentSearchGifs : trendingGifs}
          favoritedGifs={this.state.favoritedGifs}
        />
      </div>
    );
  }
}

export default App;
