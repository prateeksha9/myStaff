import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchTextFunction } from '../actions/posts';

function Header() {
  const [searchFor, setSearchFor] = useState('');
  const dispatch = useDispatch();
  const searchText = (e) => {
    setSearchFor(e.target.value);
  };

  const displaySearchResults = () => {
    dispatch(searchTextFunction(searchFor));
  };

  return (
    <div className="header">
      <div>
        <input
          type="text"
          onChange={searchText}
          placeholder="Search with Name, Email or Role"
        />
      </div>
      <div>
        <button onClick={displaySearchResults}>Search</button>
      </div>
    </div>
  );
}

export default Header;
