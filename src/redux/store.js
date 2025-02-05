import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./slices/countrySlice";
import albumsReducer from "./slices/albumsSlice";

const store = configureStore({
  reducer: {
    countryReducer,
    albumsReducer,
  },
});

export default store;
