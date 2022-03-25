import { data } from 'api/data';
import { FILTER_FLYERS, SEARCH_FLYERS } from 'redux/types';
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
      return { ...state, flyers: action.payload };

    case SEARCH_FLYERS:
      return { ...state, search: action.payload };

    default: return state;
  }
};
