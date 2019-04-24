import React, { Component } from 'react';
import request from 'superagent';

import './App.css';
import GifList from '../GifList';
import SearchBar from '../SearchBar';
import GiphyApi from '../GiphyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingGifs: [],
      recentSearchGifs: [],
      favoritedGifs: {},
      activeSearch: false,
      activeModal: false,
      favoritesView: false,
      currentSearchTerm: '',
      offset: 25
    };
    this.fetchGifs = this.fetchGifs.bind(this);
    this.fetchMoreGifs = this.fetchMoreGifs.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);
    this.addOrRemoveFavorite = this.addOrRemoveFavorite.bind(this);
    this.toggleFavoritesView = this.toggleFavoritesView.bind(this);
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
    }
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
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

  onScroll = () => {
    const {
      fetchMoreGifs
      // state: {
      //   loadingMoreGifs,
      //   hasMore,
      // },
    } = this;

    // Bails early if:
    // * there's an error
    // * it's already loading
    // * there's nothing left to load
    // if (loadingMoreGifs || !hasMore) return;

    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log('scroll detected');
      fetchMoreGifs(this.state.offset);
    }
  };

  // fetches more gifs with current offset and adds to trending/ recentsearch
  async fetchMoreGifs() {
    // take current offset from state
    // request more gifs
    console.log('current offset', this.state.offset);
    const moreGifs = await GiphyApi.fetchMoreGifs(this.state.offset);
    // update offset increment by 25
    // this.setState(st => ({ offset: st.offset + 25 }));
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
      delete newFavorites[gifObj.id];

      this.setState({ favoritedGifs: newFavorites });
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  }

  toggleFavoritesView() {
    this.setState(st => ({ favoritesView: !st.favoritesView }));
  }

  render() {
    const {
      recentSearchGifs,
      trendingGifs,
      favoritesView,
      currentSearchTerm,
      favoritedGifs,
      activeSearch
    } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search your favorite GIFs in one place!</h2>
          <SearchBar
            handleSearch={this.fetchGifs}
            handleReset={this.clearSearchResults}
            handleFavoritesView={this.toggleFavoritesView}
            favoritesView={favoritesView}
          />
        </div>
        <h3 className="gif-list-header">
          {activeSearch
            ? `GIPHY results for: #${currentSearchTerm}`
            : favoritesView
            ? 'My favorites...'
            : "What's Trending..."}
        </h3>

        <GifList
          handleAddOrRemoveFav={this.addOrRemoveFavorite}
          gifs={activeSearch ? recentSearchGifs : trendingGifs}
          favoritedGifs={favoritedGifs}
          favoritesView={favoritesView}
        />
      </div>
    );
  }
}

export default App;
