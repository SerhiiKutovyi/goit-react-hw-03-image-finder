import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

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
    image: '',
  };

  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
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
    this.setState({ search: data, page: 1, articles: [] });
  };

  clickLoadMore = eve => {
    console.log(eve);
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ image }) => ({
      image: !image,
    }));
  };

  showModalImg = largeImageURL => {
    this.setState({ image: { largeImageURL } });

    window.addEventListener('keydown', eve => {
      if (eve.code === 'Escape') {
        this.setState({ image: '' });
      }
    });
  };

  closeModalImg = eve => {
    if (eve.currentTarget === eve.target) {
      this.setState({ image: '' });
    }
  };

  render() {
    const { articles, image } = this.state;

    return (
      <AppStyles>
        <Searchbar onSubmit={this.searchBarSubmit} />
        {this.state.loading && <Loader />}
        {articles.length > 0 ? (
          <ImageGallery articles={articles} modalBigImg={this.showModalImg} />
        ) : null}
        {articles.length > 11 && <Button clickLoad={this.clickLoadMore} />}
        {image && <Modal src={image} close={this.closeModalImg} />}
        <ToastContainer autoClose={2000} />
      </AppStyles>
    );
  }
}

const AppStyles = styled.div`
  text-align: center;
`;
