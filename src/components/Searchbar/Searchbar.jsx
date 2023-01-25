import { Search } from './Searchbar.styles';

export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <Search>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input type="text" placeholder="Search images and photos" />
        </form>
      </Search>
    </>
  );
};
