import { Overlay } from './Modal.styles';

export const Modal = ({ src, alt, close }) => {
  return (
    <Overlay onClick={close}>
      <div>
        <img src={src.largeImageURL} alt={alt} />
      </div>
    </Overlay>
  );
};
