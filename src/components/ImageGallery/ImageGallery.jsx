import { Gallery } from './ImageGallery.styles';

export const ImageGallery = ({ articles }) => {
  return (
    <>
      <Gallery>{articles.map(ele => console.log(ele))}</Gallery>
    </>
  );
};
