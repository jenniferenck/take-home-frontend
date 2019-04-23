import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    const { handleReset } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="search-form">
          <input
            placeholder="Search for a gif here!"
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit} id="search">
            Search
          </button>
        </form>
        <button onClick={handleReset} id="reset-search">
          Reset
        </button>
      </div>
    );
  }
}

export default SearchBar;
