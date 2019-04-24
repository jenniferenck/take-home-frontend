import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const { handleReset, handleFavoritesView, favoritesView } = this.props;
    console.log(this.props);
    return (
      <div className="searchbar-section">
        <form onSubmit={this.handleSubmit} id="search-form">
          <input
            placeholder="Search for a gif here!"
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
        </form>

        <div className="button-section">
          <button onClick={this.handleSubmit} id="search">
            Search
          </button>
          <button onClick={handleReset} id="reset-search">
            Reset
          </button>
        </div>

        <div className="favorites-clickable" onClick={handleFavoritesView}>
          {favoritesView ? 'back to my non-favs' : 'view my favs'}
        </div>
      </div>
    );
  }
}

export default SearchBar;
