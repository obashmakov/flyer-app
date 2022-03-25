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
      return { ...state, data: action.payload };

    case SEARCH_FLYERS:
      return { ...state, search: action.payload };

    case GET_SEARCH_RESULT:
      return {
        ...state,
        data: state.data.filter(
          // @ts-ignore
          (flyer) => flyer.title === action.payload,
        ),
      };

    case REMOVE_FILTER:
      return initialState;

    default: return state;
  }
};
