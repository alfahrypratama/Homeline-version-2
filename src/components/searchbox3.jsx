import React from 'react';

const SearchBox = () => {
  return (
    <div className="d-flex align-items-center">
      <input type="text" className="form-control mr-2" placeholder="Cari..." />
      <button className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchBox;