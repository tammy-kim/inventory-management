import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  items: itemReducer,
  // Add more reducers here if needed
});

export default rootReducer;