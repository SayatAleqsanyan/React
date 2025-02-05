import { createSlice } from '@reduxjs/toolkit'

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
      state.countries.push(action.payload)
    },
    removeCountry: (state, action) => {
      state.countries = state.countries.filter(
        country => country.id !== action.payload
      )
    },
    editCountry: (state, action) => {
      const find = state.countries.find(c => c.id === action.payload.id)
      if (find) {
        find.name = action.payload.name
      }
    },
  },
})

export const { addCountry, removeCountry, editCountry } = countrySlice.actions
export default countrySlice.reducer
