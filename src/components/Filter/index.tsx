import React from 'react';
import { useDispatch } from 'react-redux';
import { openFilter, selectFilters } from 'redux/actions';
import Checkbox from 'components/Inputs/Checkbox';
import ClearButton from 'components/Buttons/ClearButton';

import 'styles/blocks/filter.scss';

import { FilterProps } from 'types/reducers.interface';

function Filter({
  name,
  filters,
  isOpen,
  selectedFilters,
}: FilterProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <div className="filter__container">
        <p className="filter__name">
          {selectedFilters?.length ? (
            // @ts-ignore
            selectedFilters.map((filter) => filter.name)
          ) : name}
        </p>

        {!!selectedFilters?.length && (
          <ClearButton type="filter" filterType={`${name.toLowerCase()}_id`} />
        )}
        <button className="filter__openButton" onClick={() => dispatch(openFilter(name))}>
          <i className="fa-solid fa-caret-down filter__icon" />
        </button>
      </div>

      {isOpen && (
        <div className="options">
          {filters.map((filter) => (
            <Checkbox
              key={filter.id}
              id={String(filter.id)}
              name={filter.name}
              filterType={name.toLowerCase()}
              action={selectFilters}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;
