import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterFlyers } from 'redux/actions';

import { CheckboxProps } from 'types/input.interface';
import { SelectedFiltersProps } from 'types/reducers.interface';

interface StateProps { filters: { selectedFilters: SelectedFiltersProps[] } }

function Checkbox({
  id,
  name,
  filterType,
  action,
}: CheckboxProps): JSX.Element {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((state: StateProps) => state.filters);

  const handleChange = () => {
    const isFilterSelected = selectedFilters.some(
      (filter) => filter.id === Number(id) && filter.filterType === `${filterType}_id`,
    );

    if (!isFilterSelected) {
      dispatch(action([...selectedFilters, { id: Number(id), name, filterType: `${filterType}_id` }]));
      dispatch(filterFlyers([...selectedFilters, { id: Number(id), name, filterType: `${filterType}_id` }]));
    } else {
      const filters = selectedFilters.filter(
        (filter) => !(filter.filterType === `${filterType}_id` && filter.id === Number(id)),
      );

      dispatch(action(filters));
      dispatch(filterFlyers(filters));
    }
  };

  return (
    <label
      className="options__option"
      htmlFor={id}
    >
      {name}
      <input
        className="options__input"
        id={id}
        type="checkbox"
        onChange={handleChange}
        checked={selectedFilters.some(
          (filter) => filter.filterType === `${filterType}_id` && filter.id === Number(id),
        )}
      />
    </label>
  );
}

export default Checkbox;
