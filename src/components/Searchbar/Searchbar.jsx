import React, { Component } from 'react';
import { Search } from './Searchbar.styles';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  componentWillUnmount() {}
  handelChange = eve => {
    this.setState({ inputValue: eve.target.value });
  };

  render() {
    return (
      <>
        <Search>
          <form onSabmit={() => handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              value={this.state.inputValue}
              onChange={this.handelChange}
              type="text"
              placeholder="Search images and photos"
            />
          </form>
        </Search>
      </>
    );
  }
}
