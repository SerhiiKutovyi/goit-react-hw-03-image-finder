import { GalleryItem } from './ImageGalleryItem.styles';

export const ImageGalleryItem = ({ img }) => {
  return (
    <>
      {img.map(({ largeImageURL, tegs, id }) => (
        <GalleryItem key={id}>
          <img src={largeImageURL} alt={tegs} />
        </GalleryItem>
      ))}
    </>
  );
};
