import { combineReducers } from 'redux';
import { appReducer } from './reducers/appReducer';
import { flyersReducer } from './reducers/flyersReducer';
import { filtersReducer } from './reducers/filtersReducer';
import { likesReducer } from './reducers/likesReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  flyers: flyersReducer,
  filters: filtersReducer,
  likes: likesReducer,
});
