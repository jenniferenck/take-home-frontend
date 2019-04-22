import GIPHY_KEY from './env';
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
  }
}

export default GiphyApi;
