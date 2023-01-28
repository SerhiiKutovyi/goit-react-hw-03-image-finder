import { Component } from 'react';
import { Overlay } from './Modal.styles';

export class Modal extends Component {
  componentDidMount(prevProps, prevState) {
    console.log('Modal :>> DidMount ');
  }

  componentWillUnmount() {
    console.log('Modal  :>> Unmount');
  }

  render() {
    console.log(222, this.props);
    return (
      <Overlay>
        <div>
          <img src="" alt="" />
        </div>
      </Overlay>
    );
  }
}
