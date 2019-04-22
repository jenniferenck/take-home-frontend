import React, { Component } from 'react';

import './App.css';
import GiphList from '../GiphList';
import SearchBar from '../SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Let's get Giphy</h2>
          <SearchBar />
          <GiphList />
        </div>
      </div>
    );
  }
}

export default App;
