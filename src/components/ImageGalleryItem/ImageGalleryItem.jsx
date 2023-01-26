import {im}

export const ImageGalleryItem = ({ largeImageURL, tegs }) => {
  return (
    <>
      <galleryItem>
        <img src={largeImageURL} alt={tegs} />
      </galleryItem>
    </>
  );
};
