import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addCountry,
  removeCountry,
  editCountry,
} from '../../redux/slices/countrySlice'

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
    <div className='flex flex-col items-center space-y-4'>
      <h2 className='text-3xl font-bold'>Country</h2>
      <div className='flex space-x-4 min-w-[400px]'>
        <input
          className='w-[300px] border border-gray-300 dark:border-gray-700 p-2 rounded-lg'
          type='text'
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700'
          onClick={() => {
            dispatch(addCountry({ id: Math.random(), name: country }))
            setCountry('')
          }}
        >
          Add Country
        </button>
      </div>

      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {countries.map(country => (
          <li
            key={country.id}
            className='flex justify-between space-x-4 min-w-[400px] py-2'
          >
            {editingId === country.id ? (
              <input
                className='min-w-[300px] text-2xl'
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
              />
            ) : (
              <p className='text-2xl font-bold min-w-[300px]'>{country.name}</p>
            )}

            {editingId === country.id ? (
              <>
                <button
                  className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 active:bg-green-700'
                  onClick={() => handleSave(country.id)}
                >
                  Save
                </button>
                <button
                  className='bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 active:bg-slate-700'
                  onClick={() => handleCancel(country.id)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700'
                  onClick={() => handleEdit(country.id, country.name)}
                >
                  Edit
                </button>

                <button
                  className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 active:bg-red-700'
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


// Add and edit field is the same

// import React, { useState } from 'react'

// const Country = () => {
//   const [country, setCountry] = useState('')
//   const [editingId, setEditingId] = useState(null)
//   const [countries, setCountries] = useState([])

//   const handleEdit = (id, currentName) => {
//     setEditingId(id)
//     setCountry(currentName)
//   }

//   const handleSave = () => {
//     if (country.trim() && editingId) {
//       setCountries(
//         countries.map(item =>
//           item.id === editingId ? { ...item, name: country } : item
//         )
//       )
//       setEditingId(null)
//       setCountry('')
//     }
//   }

//   const handleAdd = () => {
//     if (country.trim() && !editingId) {
//       setCountries([...countries, { id: Math.random(), name: country }])
//       setCountry('')
//     }
//   }

//   const handleRemove = id => {
//     setCountries(countries.filter(item => item.id !== id))
//   }

//   return (
//     <div className='flex flex-col items-center space-y-4'>
//       <h2 className='text-3xl font-bold'>Country</h2>
//       <div className='flex space-x-4 min-w-[400px]'>
//         <input
//           className='w-[300px] border border-gray-300 dark:border-gray-700 p-2 rounded-lg'
//           type='text'
//           value={country}
//           onChange={e => setCountry(e.target.value)}
//           onKeyPress={e => {
//             if (e.key === 'Enter') {
//               editingId ? handleSave() : handleAdd()
//             }
//           }}
//         />
//         {editingId ? (
//           <>
//             <button
//               className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 active:bg-green-700'
//               onClick={handleSave}
//             >
//               Save Changes
//             </button>
//             <button
//               className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 active:bg-gray-700'
//               onClick={() => {
//                 setEditingId(null)
//                 setCountry('')
//               }}
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <button
//             className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700'
//             onClick={handleAdd}
//           >
//             Add Country
//           </button>
//         )}
//       </div>

//       <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
//         {countries.map(country => (
//           <li
//             key={country.id}
//             className='flex justify-between space-x-4 min-w-[400px] py-2'
//           >
//             <p className='text-2xl font-bold min-w-[300px]'>{country.name}</p>
//             <button
//               className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 active:bg-red-700'
//               onClick={() => handleRemove(country.id)}
//             >
//               Remove
//             </button>
//             <button
//               className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700'
//               onClick={() => handleEdit(country.id, country.name)}
//             >
//               Edit
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Country
