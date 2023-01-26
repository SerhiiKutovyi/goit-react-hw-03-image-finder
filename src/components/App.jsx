import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import axios from 'axios';
// import PropTypes from 'prop-types';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    articles: [],
    search: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles === this.state.articles) {
      fetch(
        `${BASE_URL}?q=${this.state.search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(cards => this.setState({ articles: cards.hits }));
    }
  }

  searchBarSubmit = data => {
    this.setState({ search: data });
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchBarSubmit} />
        {articles.length > 0 ? <ImageGallery articles={articles} /> : null}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
