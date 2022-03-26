import React, { useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { searchFlyers } from 'redux/actions';
import ClearButton from 'components/Buttons/ClearButton';

import 'styles/blocks/search.scss';

import { FlyerProps } from 'types/reducers.interface';
import SearchResults from './SearchResults';

interface StateProps { flyers: { data: FlyerProps[], search: string } }

function Search(): JSX.Element {
  const dispatch = useDispatch();
  const searchResults = useSelector((state: StateProps) => state.flyers.data.filter(
    (flyer) => flyer.title.toLocaleLowerCase().includes(state.flyers.search),
  ));

  const [input, setInput] = useState('');
  const [areResultsOpen, setAreResultsOpen] = useState(false);

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setInput(value);
    setAreResultsOpen(true);
    dispatch(searchFlyers(value));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="searchContainer">
      <form className="search" onSubmit={handleSubmit}>
        <label
          className={cx({
            search__label: true,
            'search__label--isOpen': areResultsOpen,
          })}
          htmlFor="search"
        >
          <i className="fa-solid fa-magnifying-glass search__icon" />
          <input
            className="search__input"
            id="search"
            type="text"
            placeholder="Search a Flyer"
            onChange={handleChange}
            value={input}
          />
          {input && <ClearButton setInput={setInput} />}
        </label>
      </form>
      {areResultsOpen && (
        <SearchResults
          flyers={searchResults}
          setInput={setInput}
          setAreResultsOpen={setAreResultsOpen}
        />
      )}
    </div>
  );
}

export default Search;
