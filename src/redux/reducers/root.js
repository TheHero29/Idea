import { combineReducers } from 'redux';
import postReducer from './post';
import userReducer from './user';
// import other reducers

const rootReducer = combineReducers({
  posts: postReducer,
  user: userReducer,
  // other reducers
});

export default rootReducer;
