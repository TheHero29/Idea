import { combineReducers } from 'redux';
import postReducer from './post';
// import other reducers

const rootReducer = combineReducers({
  posts: postReducer,
  // other reducers
});

export default rootReducer;
