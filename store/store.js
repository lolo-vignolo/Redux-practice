import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { songReducer } from '../reducers/songReducer';
import thunk from 'redux-thunk';
import { postReducer } from '../reducers/postReducer';
import { abilityReducer } from '../reducers/abilityReducer';
import { newsReducer } from '../reducers/newsReducer';

const reducers = combineReducers({
  songs: songReducer,
  posts: postReducer,
  ability: abilityReducer,
  news: newsReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
