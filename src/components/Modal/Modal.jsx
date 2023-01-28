import PropTypes from 'prop-types';
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

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
