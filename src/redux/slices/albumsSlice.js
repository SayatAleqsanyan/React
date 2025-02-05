import { createSlice } from '@reduxjs/toolkit'

const albumsSlice = createSlice({
  name: 'albums',
  initialState: {
    albums: [
      {
        id: Math.random(),
        title: 'eaque aut omnis a',
      },
      {
        id: Math.random(),
        title: 'necessitatibus nihil autem',
      },
      {
        id: Math.random(),
        title: 'veritatis unde neque',
      },
      {
        id: Math.random(),
        title: 'quia et suscipit',
      },
    ],
  },
  reducers: {
    addAlbum: (state, action) => {
      state.albums.push(action.payload)
    },
    removeAlbum: (state, action) => {
      state.albums = state.albums.filter(
        album => album.id !== action.payload
      )
    },
    editAlbum: (state, action) => {
      const find = state.albums.find(album => album.id === action.payload.id)
      if (find) {
        find.title = action.payload.title
      }
    },
  },
})

export const { addAlbum, removeAlbum, editAlbum } = albumsSlice.actions
export default albumsSlice.reducer
