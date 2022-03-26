import React from 'react';
import { useDispatch } from 'react-redux';
import { openFilter } from 'redux/actions';

import 'styles/blocks/filter.scss';

import { FilterProps } from 'types/reducers.interface';

function Filter({ name, filters, isOpen }: FilterProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <button className="filter__button" onClick={() => dispatch(openFilter(name))}>
        {name}
        <i className="fa-solid fa-caret-down filter__icon" />
      </button>

      {isOpen && (
        <div className="options">
          {filters.map((filter) => (
            <label
              key={filter.id}
              className="options__option"
              htmlFor={String(filter.id)}
            >
              {filter.name}
              <input className="options__input" id={String(filter.id)} type="checkbox" />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
