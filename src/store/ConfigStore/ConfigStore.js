import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../actions/EventAction";

const store = configureStore({
  reducer: eventReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
