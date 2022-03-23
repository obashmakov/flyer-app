import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from 'redux/rootReducer';

export const store = createStore(rootReducer, composeWithDevTools());
