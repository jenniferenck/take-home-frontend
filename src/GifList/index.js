import React, { Component } from 'react';
import Gif from '../Gif';
import './GifList.css';

class GifList extends Component {
  render() {
    const { gifs, handleAddOrRemoveFav } = this.props;
    return (
      <div className="gif-list-section">
        {gifs.length ? (
          gifs.map(gif => (
            <Gif
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
        )}
      </div>
    );
  }
}

export default GifList;
