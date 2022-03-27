import { data } from 'api/data';
import {
  FILTER_FLYERS,
  GET_SEARCH_RESULT,
  REMOVE_FILTER,
  SEARCH_FLYERS,
} from 'redux/types';
import { FlyerProps, ActionProps } from 'types/reducers.interface';

interface FlyersProps {
  data: FlyerProps[];
  search: string;
}

const initialState: FlyersProps = {
  data: data.filter((flyer) => flyer.is_published),
  search: '',
};

export const flyersReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case FILTER_FLYERS:
      return {
        ...state,
        data: initialState.data.filter(
          (flyer) => {
            if (action.payload.length) {
              const isFilterSelected = action.payload.some(
                // @ts-ignore
                (item) => item.id === flyer[item.filterType],
              );
              // @ts-ignore
              return isFilterSelected;
            }

            return flyer;
          },
        ),
      };

    case SEARCH_FLYERS:
      return { ...state, search: action.payload };

    case GET_SEARCH_RESULT:
      return {
        ...state,
        data: state.data.filter(
          (flyer) => flyer.title === String(action.payload),
        ),
      };

    case REMOVE_FILTER:
      return initialState;

    default: return state;
  }
};
