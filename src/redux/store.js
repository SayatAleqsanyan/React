import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./slices/countrySlice";


const store = configureStore({
  reducer: {
    countryReducer
  },
});



export default store;
