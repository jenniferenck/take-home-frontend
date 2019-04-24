import React, { Component } from 'react';
import Gif from '../Gif';
import './GifList.css';

class GifList extends Component {
  displayFavorites = () => {
    const { handleAddOrRemoveFav, favoritedGifs } = this.props;

    for (let gif in favoritedGifs) {
      return (
        <Gif
          favorited={favoritedGifs[gif.id] ? true : false}
          key={gif.id}
          id={gif.id}
          title={gif.title}
          imageUrl={gif.images.fixed_height.url}
          source={gif.source}
          rating={gif.rating}
          handleAddOrRemoveFav={handleAddOrRemoveFav}
        />
      );
    }
  };

  displayNormalView = () => {
    const { handleAddOrRemoveFav, favoritedGifs, gifs } = this.props;
    console.log('gifs:', gifs);
    return gifs.length ? (
      gifs.map(gif => (
        <Gif
          favorited={favoritedGifs[gif.id] ? true : false}
          key={gif.id}
          id={gif.id}
          title={gif.title}
          imageUrl={gif.images.fixed_height.url}
          source={gif.source}
          rating={gif.rating}
          handleAddOrRemoveFav={handleAddOrRemoveFav}
        />
      ))
    ) : (
      <h2>GIFs Loading...</h2>
    );
  };
  render() {
    const { favoritesView } = this.props;
    return (
      <div className="gif-list-section">
        {favoritesView ? this.displayFavorites() : this.displayNormalView()}
      </div>
    );
  }
}

export default GifList;
