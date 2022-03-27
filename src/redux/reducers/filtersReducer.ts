import { filters } from 'api/data';
import { OPEN_FILTER, SELECT_FILTERS } from 'redux/types';
import { ActionProps, FilterProps } from 'types/reducers.interface';

interface FiltersProps {
  filters: FilterProps[],
  selectedFilters: [],
}

const initialState: FiltersProps = {
  filters,
  selectedFilters: [],
};

export const filtersReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case OPEN_FILTER:
      return {
        ...state,
        filters: state.filters.map((filter) => {
          if (filter.name === String(action.payload)) {
            return {
              ...filter,
              isOpen: !filter.isOpen,
            };
          }

          return {
            ...filter,
            isOpen: false,
          };
        }),
      };

    case SELECT_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload,
      };

    default: return state;
  }
};
