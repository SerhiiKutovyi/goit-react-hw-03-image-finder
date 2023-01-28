import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

// import axios from 'axios';
// import PropTypes from 'prop-types';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    articles: [],
    search: '',
    page: 1,
    loading: false,
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ loading: true, articles: [] });
      fetch(
        `${BASE_URL}?q=${this.state.search}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(cards =>
          this.setState(prevState => ({
            articles: [...prevState.articles, ...cards.hits],
          }))
        )
        .catch(error => console.log(error))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  searchBarSubmit = data => {
    console.log(111, data);
    this.setState({ search: data });
  };

  // clickLoadMore = event => {
  //   this.setState({ page + 1});
  // };

  render() {
    const { articles, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchBarSubmit} />
        {articles.length > 0 ? <ImageGallery articles={articles} /> : null}
        <ImageGalleryItem img={articles} />
        <Button clickLoad={this.clickLoadMore} />
        {showModal && <Modal />}
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
