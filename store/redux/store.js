import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

const store = configureStore({
  // reducers are the different slices of state/data, as well as
  // actions that can change that data that is used by redux
  // to construct the general store with data and actions
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export default store;
