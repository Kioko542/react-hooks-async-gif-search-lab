// GifListContainer.js
import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const API_KEY = 'E4wQSllIplSB48NH1bebi4ki5FeDyl6t'; // Your Giphy API Key
const API_URL = 'https://api.giphy.com/v1/gifs/search';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchGifs('dolphin'); // Initial default search
  }

  fetchGifs = (query) => {
    fetch(`${API_URL}?q=${query}&api_key=${API_KEY}&rating=g`)
      .then((response) => response.json())
      .then((data) => {
        const firstThreeGifs = data.data.slice(0, 3);
        this.setState({ gifs: firstThreeGifs });
      })
      .catch((error) => console.error(error));
  };

  handleSearch = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
