import { Gallery } from './ImageGallery.styles';

export const ImageGallery = ({ articles }) => {
  return (
    <Gallery>
      {articles.map(({ id, webformatURL, tegs }) => (
        <li key={id}>
          <img src={webformatURL} alt={tegs}></img>
        </li>
      ))}
    </Gallery>
  );
};
