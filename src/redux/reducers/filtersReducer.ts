import { filters } from 'api/data';
import { OPEN_FILTER } from 'redux/types';
import { ActionProps, FilterProps } from 'types/reducers.interface';

interface FiltersProps {
  filters: FilterProps[],
}

const initialState: FiltersProps = {
  filters,
};

export const filtersReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case OPEN_FILTER:
      return {
        ...state,
        filters: state.filters.map((filter) => {
          // @ts-ignore
          if (filter.name === action.payload) {
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

    default: return state;
  }
};
