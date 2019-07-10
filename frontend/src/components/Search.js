import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        onChange={(e) => props.handleChange(e)}
        id="search-bar"
        type="text"
        value={props.searchTerm}
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
