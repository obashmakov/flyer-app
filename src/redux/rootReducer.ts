import { combineReducers } from 'redux';
import { flyersReducer } from './reducers/flyersReducer';

export const rootReducer = combineReducers({
  flyers: flyersReducer,
});
