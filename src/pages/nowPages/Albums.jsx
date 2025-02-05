import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addAlbum,
  removeAlbum,
  editAlbum,
} from '../../redux/slices/albumsSlice'

const Albums = () => {
  return (
    <div>
      Albums Page
    </div>
  );
};

export default Albums;
