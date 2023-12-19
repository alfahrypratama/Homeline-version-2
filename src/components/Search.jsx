import React from 'react';

const Search= () => {
  return (
    <div className="d-flex align-items-center gap-3">
      <input
        type="text"
        className="form-control mr-2"
        placeholder="Cari..."
        style={{ maxWidth: '303px' }} // Tambahkan properti style untuk membatasi lebar
      />
      <button className="btn " style={{backgroundColor: "#5B4533", color:"white"}}>Cari</button>
    </div>
  );
};

export default Search;