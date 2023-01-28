import { Component } from 'react';
import { Overlay } from './Modal.styles';

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal :>> DidMount ');
  }

  componentWillUnmount() {
    console.log('Modal  :>> Unmount');
  }
  render() {
    return (
      <Overlay>
        <div>
          <img src="" alt="" />
        </div>
      </Overlay>
    );
  }
}
