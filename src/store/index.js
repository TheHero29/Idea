import IdeaReducer from "./IdeaReducer";
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
const store = createStore(IdeaReducer, applyMiddleware(thunk));
export default store;