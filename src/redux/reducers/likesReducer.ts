import { ADD_LIKED_FLYER, REMOVE_LIKED_FLYER } from 'redux/types';
import { ActionProps } from 'types/reducers.interface';

const initialState = {
  likes: [],
};

export const likesReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case ADD_LIKED_FLYER:
      return {
        ...state,
        likes: action.payload,
      };

    case REMOVE_LIKED_FLYER:
      return {
        ...state,
        likes: action.payload,
      };

    default: return state;
  }
};
