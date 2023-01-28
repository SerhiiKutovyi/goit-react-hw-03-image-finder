import { GalleryItem } from './ImageGalleryItem.styles';

export const ImageGalleryItem = ({ webformatURL, id, tegs }) => {
  return (
    <GalleryItem>
      <li key={id}>
        <img src={webformatURL} alt={tegs}></img>
      </li>
    </GalleryItem>
  );
};
