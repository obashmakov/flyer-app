import flyers from 'api/flyers.json';
import { FILTER_FLYERS } from 'redux/types';
import { FlyerProps, ActionProps } from 'types/reducers.interface';

interface FlyersProps {
  data: FlyerProps[];
}

const initialState: FlyersProps = {
  data: flyers.data.filter((flyer) => flyer.is_published),
};

export const flyersReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case FILTER_FLYERS:
      return { ...state, flyers: action.payload };
    default: return state;
  }
};
