import GIPHY_KEY from './env';
import Helpers from './helpers';
const axios = require('axios');

const BASE_URL = `https://api.giphy.com/v1/gifs/`;

class GiphyApi {
  // results are up to 25 gifs with keys of data, meta, and pagination:

  static async fetchTrendingGifs() {
    // fetches currently trending gifs
    const results = await axios.get(`${BASE_URL}trending?api_key=${GIPHY_KEY}`);
    return results.data;
  }

  static async fetchGifs(searchTerm) {
    // fetches gifs based on searchTerm
    const formattedSearchTerm = Helpers.removeSpaces(searchTerm);
    const results = await axios.get(
      `${BASE_URL}search?q=${formattedSearchTerm}&api_key=${GIPHY_KEY}`
    );
    return results.data;
  }

  static async fetchMoreGifs(offset) {
    const results = await axios.get(
      `${BASE_URL}trending?api_key=${GIPHY_KEY}&offset=${offset}`
    );
    return results.data.data;
  }
}

export default GiphyApi;
