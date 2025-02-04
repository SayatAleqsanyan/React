import { createSlice } from '@reduxjs/toolkit';



const countrySlice = createSlice({
  name: 'country',
  initialState: {
    countries: [
      {
        id: Math.random(),
        name: 'India',
      },
      {
        id: Math.random(),
        name: 'USA',
      },
      {
        id: Math.random(),
        name: 'UK',
      },

    ],
  },
  reducers: {
    addCountry: (state, action) => {
      state.countries.push(action.payload);
    },
    removeCountry: (state, action) => {
      state.countries = state.countries.filter((country) => country.id !== action.payload);
    },

  },

});


export const { addCountry, removeCountry } = countrySlice.actions;
export default countrySlice.reducer;
