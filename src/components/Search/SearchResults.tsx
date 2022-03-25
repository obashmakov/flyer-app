import React from 'react';
import { FlyerProps } from 'types/reducers.interface';

import 'styles/blocks/search.scss';

interface Props { flyers: FlyerProps[] }

function SearchResults({ flyers }: Props): JSX.Element {
  return (
    <div className="searchResults">
      {flyers.map((flyer) => (
        <button className="searchResults__result" key={flyer.id}>
          {flyer.title}
        </button>
      ))}
    </div>
  );
}

export default SearchResults;
