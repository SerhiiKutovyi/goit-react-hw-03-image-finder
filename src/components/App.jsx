import axios from 'axios';
import styled from 'styled-components';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

// import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';

const ArticleList = ({ articles }) => (
  <Gallery>
    {articles.map(({ id, webformatURL }) => (
      <li key={id}>
        <img src={webformatURL} alt="cat"></img>
      </li>
    ))}
  </Gallery>
);

export class App extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await axios(
      `?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    this.setState({ articles: response.data.hits });
  }

  handleSubmit = eve => {
    eve.preventDefault();
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {articles.length > 0 ? <ArticleList articles={articles} /> : null}
      </>
    );
  }
}

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 24px;
`;
