import { configureStore, combineReducers } from "@reduxjs/toolkit";

import globalReducer from "./slices/globalSlice";
import userReducer from "./slices/userSlice";

const reducers = combineReducers({
  user: userReducer,
  global: globalReducer,
});

export const store = configureStore({
  reducer: reducers,
});
