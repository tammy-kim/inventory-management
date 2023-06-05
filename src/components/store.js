import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer"; 

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
  });

export default store;