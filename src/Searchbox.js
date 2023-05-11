import React from 'react';

const Searchbox = ({ handleSearch }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type={'search'}
        placeholder={'Search Robots'}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Searchbox;
