import { combineReducers } from 'redux';
import { flyersReducer } from './reducers/flyersReducer';
import { filtersReducer } from './reducers/filtersReducer';

export const rootReducer = combineReducers({
  flyers: flyersReducer,
  filters: filtersReducer,
});
