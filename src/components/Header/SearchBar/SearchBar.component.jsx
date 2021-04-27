import React, { useEffect, useRef } from 'react';
import { SearchBox, Input } from '../styled';
import { useAppContext } from '../../../context/AppProvider';

const SearchBar = () => {
  const searchInput = useRef(null);

  const { dispatch } = useAppContext();

  const handleFocus = () => {
    searchInput.current.select();
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      dispatch({ type: 'SET_SEARCH', payload: evt.target.value });
    }
  };

  useEffect(() => {
    handleFocus();
  }, []);

  return (
    <SearchBox onClick={handleFocus} data-testid="Searchbox">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
        alt=""
        width="25"
        height="25"
        style={{ verticalAlign: 'middle', margin: 'auto 0' }}
      />
      <Input
        ref={searchInput}
        placeholder="Search..."
        type="text"
        onKeyDown={handleKeyDown}
        data-testid="Inputbox"
      />
    </SearchBox>
  );
};

export default SearchBar;
