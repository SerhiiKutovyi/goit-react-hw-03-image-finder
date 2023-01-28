import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styles';

export const ImageGallery = ({ articles }) => {
  console.log(articles);
  return (
    <>
      <Gallery>
        {articles.map(({ webformatURL, id, tegs, largeImageURL }) => {
          return (
            <ImageGalleryItem
              src={webformatURL}
              alt={tegs}
              key={id}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </Gallery>
    </>
  );
};
