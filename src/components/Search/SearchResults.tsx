import React, { Dispatch, SetStateAction } from 'react';
import { FlyerProps } from 'types/reducers.interface';

import 'styles/blocks/search.scss';
import { useDispatch } from 'react-redux';
import { getSearchResult } from 'redux/actions';

interface Props {
  flyers: FlyerProps[];
  setInput: Dispatch<SetStateAction<string>>;
  setAreResultsOpen: Dispatch<SetStateAction<boolean>>;
}

function SearchResults({ flyers, setInput, setAreResultsOpen }: Props): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = (title: string) => {
    setInput(title);
    setAreResultsOpen(false);
    dispatch(getSearchResult(title));
  };

  return (
    <div className="searchResults">
      {flyers.map((flyer) => (
        <button
          className="searchResults__result"
          key={flyer.id}
          onClick={() => handleClick(flyer.title)}
        >
          {flyer.title}
        </button>
      ))}
    </div>
  );
}

export default SearchResults;
