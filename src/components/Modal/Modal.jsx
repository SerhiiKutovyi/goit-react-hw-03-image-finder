import { Component } from 'react';
import { Overlay } from './Modal.styles';

export class Modal extends Component {
  render() {
    const { image } = this.props;
    console.log('MODAl', image);

    return (
      <Overlay>
        <div>
          <img src={image} alt="alt" />
        </div>
      </Overlay>
    );
  }
}
