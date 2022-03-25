import ClearButton from 'components/Buttons/ClearButton';
import React, { useState } from 'react';
import 'styles/blocks/search.scss';

function Search(): JSX.Element {
  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label className="search__label" htmlFor="search">
        <i className="fa-solid fa-magnifying-glass search__icon" />
        <input
          className="search__input"
          id="search"
          type="text"
          onChange={handleChange}
          value={input}
        />
        {input && <ClearButton setInput={setInput} />}
      </label>
    </form>
  );
}

export default Search;
