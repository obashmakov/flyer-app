import { HIDE_LOADER, SHOW_LOADER } from 'redux/types';
import { ActionProps } from 'types/reducers.interface';

const initialState = {
  loading: false,
  error: false,
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

    default: return state;
  }
};
