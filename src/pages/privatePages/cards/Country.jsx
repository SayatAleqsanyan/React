import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCountry, removeCountry, editCountry } from '../../../redux/slices/countrySlice'

const Country = () => {
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')

  const { countries } = useSelector(state => state.countryReducer)
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()

  const handleEdit = (id, currentName) => {
    setEditingId(id)
    setEditValue(currentName)
  }

  const handleSave = id => {
    if (editValue.trim()) {
      dispatch(editCountry({ id, name: editValue }))
    }
    setEditingId(null)
    setEditValue('')
  }

  const handleCancel = id => {
    setEditingId(null)
    setEditValue('')
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-5xl font-bold p-10">Country</h2>
      <div className="flex space-x-4 min-w-[400px]">
        <input
          className="w-[300px] border border-gray-300 dark:bg-gray-500 dark:border-gray-700 p-2 rounded-lg"
          type="text"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700"
          onClick={() => {
            dispatch(addCountry({ id: Math.random(), name: country }))
            setCountry('')
          }}
        >
          Add Country
        </button>
      </div>

      <ul className="divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-700 bg-gray-50 p-10 rounded-2xl">
        {countries.map(country => (
          <li key={country.id} className="flex justify-between space-x-4 min-w-[400px] py-2 ">
            {editingId === country.id ? (
              <input
                className="min-w-[300px] text-2xl"
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
              />
            ) : (
              <p className="text-2xl font-bold min-w-[300px]">{country.name}</p>
            )}

            {editingId === country.id ? (
              <>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 active:bg-green-700"
                  onClick={() => handleSave(country.id)}
                >
                  Save
                </button>
                <button
                  className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 active:bg-slate-700"
                  onClick={() => handleCancel(country.id)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700"
                  onClick={() => handleEdit(country.id, country.name)}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 active:bg-red-700"
                  onClick={() => dispatch(removeCountry(country.id))}
                >
                  Remove
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Country
