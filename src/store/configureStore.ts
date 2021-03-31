import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./ducks";

const reducer = rootReducer;

const store = configureStore({
  reducer,
  devTools: process.env.REACT_APP_ENV !== "production",
});

export default store;
