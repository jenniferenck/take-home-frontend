import React, { Component } from 'react';
import Gif from '../Gif';
import './GifList.css';

class GifList extends Component {
  // store favorites in arr to render each favorite
  displayFavorites = () => {
    const { handleAddOrRemoveFav, favoritedGifs } = this.props;
    const favoritesArr = [];

    for (let fav in favoritedGifs) {
      favoritesArr.push(favoritedGifs[fav]);
    }
    return favoritesArr.map(gif => (
      <Gif
        favorited={favoritedGifs[gif.id] ? true : false}
        key={gif.id}
        id={gif.id}
        title={gif.title}
        imageUrl={gif.imageUrl}
        source={gif.source}
        rating={gif.rating}
        handleAddOrRemoveFav={handleAddOrRemoveFav}
      />
    ));
  };

  displayNormalView = () => {
    const { handleAddOrRemoveFav, favoritedGifs, gifs } = this.props;
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
    console.log('rendering view type:', favoritesView);
    return (
      <div className="gif-list-section">
        {favoritesView ? this.displayFavorites() : this.displayNormalView()}
      </div>
    );
  }
}

export default GifList;
