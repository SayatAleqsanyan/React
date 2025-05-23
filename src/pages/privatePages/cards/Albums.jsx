import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAlbum, removeAlbum, editAlbum } from '../../../redux/slices/albumsSlice'

const Albums = () => {
  const { albums } = useSelector(state => state.albumsReducer)
  const [album, setAlbum] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-5xl font-bold p-10">Albums</h2>

      <div className="flex space-x-4 min-w-[400px]">
        <input
          className="w-[300px] dark:bg-gray-500 border border-gray-300 dark:border-gray-700 p-2 rounded-lg"
          type="text"
          value={album}
          onChange={e => setAlbum(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white  px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700"
          onClick={() => {
            if (!album) return
            dispatch(addAlbum({ id: Math.random(), title: album }))
            setAlbum('')
          }}
        >
          Add Album
        </button>
      </div>

      <ul className="divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-700 bg-gray-50 p-10 rounded-2xl">
        {albums.map(album => (
          <li className="flex justify-between space-x-4 min-w-[400px] py-2" key={album.id}>
            <p className="min-w-[500px] text-2xl">{album.title}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 active:bg-red-700"
              onClick={() => dispatch(removeAlbum(album.id))}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700"
              onClick={() => {
                dispatch(editAlbum({ id: album.id, title: album.title }))
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Albums
