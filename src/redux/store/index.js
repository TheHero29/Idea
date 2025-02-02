import rootReducer from "../reducers/root";
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;