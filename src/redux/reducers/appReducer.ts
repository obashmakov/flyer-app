import {
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ERROR,
  SHOW_EMPTY_STATE,
} from 'redux/types';
import { ActionProps } from 'types/reducers.interface';

const initialState = {
  loading: false,
  error: false,
  empty: false,
};

export const appReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };

    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };

    case SHOW_ERROR:
      return {
        ...state,
        error: true,
      };

    case SHOW_EMPTY_STATE:
      return {
        ...state,
        empty: true,
      };

    default: return state;
  }
};
