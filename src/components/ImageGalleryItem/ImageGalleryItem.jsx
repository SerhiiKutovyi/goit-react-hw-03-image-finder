import { GalleryItem } from './ImageGalleryItem.styles';

export const ImageGalleryItem = ({ src, alt, largeImageURL, modalBigImg }) => {
  return (
    <GalleryItem
      onClick={() => {
        modalBigImg(largeImageURL);
      }}
    >
      <img src={src} alt={alt}></img>
    </GalleryItem>
  );
};
